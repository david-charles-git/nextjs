# Create Dependancy layer
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install

# Create Build layer
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Create Production Layer
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV WORDPRESS_LOCAL_API_ROUTE http://localhost:8080/wp-json/wp/v2
ENV WORDPRESS_ACF_API_ROUTE http://localhost:8080/wp-json/wp/v2
ENV NEXTJS_LOCAL_URL http://localhost:8080/wp-json/wp/v2

RUN addgroup --system --gid 1001 userGroup
RUN adduser --system --uid 1001 appUser

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size -  https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=appUser:userGroup /app/.next/standalone ./
COPY --from=builder --chown=appUser:userGroup /app/.next/static ./.next/static

USER appUser
EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]