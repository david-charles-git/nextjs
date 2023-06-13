"use client";

import ContactForm from "../ui/ContactForm";
import Picture from "@/library/components/ui/Picture";
import { scrollToElement } from "../../functions/Elements";
import { useCallback, useMemo, useRef, useState } from "react";
import WhatsappButton from "@/library/components/ui/buttons/WhatsappButton";
import FunctionButton from "@/library/components/ui/buttons/FunctionButton";

type ButtonType = "form" | "location" | "none";

const ContactSection: React.FC = () => {
	const [activeButton, setActiveButton] = useState<ButtonType>("none");
	const optionsRef: React.MutableRefObject<any> = useRef(null);
	const formRef: React.MutableRefObject<any> = useRef(null);

	const handleSwitchActiveButton: (targetButton: ButtonType) => void = useCallback((targetButton) => {
		setActiveButton((prevValue: ButtonType) => {
			if (targetButton === prevValue) {
				return "none";
			}

			switch (targetButton) {
				case "form":
					scrollToElement(formRef.current, -100);

					return targetButton;

				case "location":
					return targetButton;

				default:
					return "none";
			}
		});
	}, []);

	const whatsappButton: JSX.Element = useMemo(() => {
		return <WhatsappButton />;
	}, []);

	const formButton: JSX.Element = useMemo(() => {
		return (
			<FunctionButton
				buttonFunction={() => {
					handleSwitchActiveButton("form");
				}}
			>
				<Picture src={"/email-icon-yellow.svg"} alt="Email" width={30} height={30} />
				Email
			</FunctionButton>
		);
	}, [handleSwitchActiveButton]);

	const dropDownButton: JSX.Element = useMemo(() => {
		return (
			<FunctionButton
				buttonFunction={() => {
					handleSwitchActiveButton("location");
				}}
			>
				<Picture src={"/location-icon-yellow.svg"} alt={"location pin"} width={30} height={30} />
				Location
			</FunctionButton>
		);
	}, [handleSwitchActiveButton]);

	return (
		<div className="ContactSection">
			<div className="buttons grid">
				<div style={{ opacity: activeButton === "none" ? 1 : 0.3, transition: "opacity 500ms ease-in-out" }}>{whatsappButton}</div>

				<div style={{ opacity: activeButton === "form" || activeButton === "none" ? 1 : 0.3, transition: "opacity 500ms ease-in-out" }}>{formButton}</div>

				<div style={{ opacity: activeButton === "location" || activeButton === "none" ? 1 : 0.3, transition: "opacity 500ms ease-in-out" }}>
					<div className={`Button dropDown`}>
						{dropDownButton}

						<div className="options" style={{ height: `${activeButton === "location" ? optionsRef.current.clientHeight : 0}px` }}>
							<ul ref={optionsRef} className="grid">
								<li
									onClick={() => {
										handleSwitchActiveButton("none");
									}}
								>
									<a
										target="_blank"
										className="clr-yellow"
										href="https://www.google.com/maps/place/addmustard+Brighton/@50.8236889,-0.1422804,17z/data=!3m2!4b1!5s0x487bd54190bd8689:0x12fb742847d22356!4m6!3m5!1s0x4875850ac3a94dab:0xbc03888417118491!8m2!3d50.8236855!4d-0.1397055!16s%2Fg%2F11b7qt9dr4"
									>
										Brighton
									</a>
								</li>

								<li
									onClick={() => {
										handleSwitchActiveButton("none");
									}}
								>
									<a
										target="_blank"
										className="clr-yellow"
										href="https://www.google.com/maps/place/addmustard+London/@51.5123479,-0.1367066,17z/data=!3m1!4b1!4m6!3m5!1s0x487605b3be77ea1f:0x2c44a9dc3ae90d0f!8m2!3d51.5123446!4d-0.1341317!16s%2Fg%2F11rvjkf_7k"
									>
										Soho
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div
				className="form"
				style={{ height: `${activeButton === "form" ? formRef.current.clientHeight : 0}px`, transition: "height 500ms ease-in-out", overflow: "hidden" }}
			>
				<div ref={formRef}>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
