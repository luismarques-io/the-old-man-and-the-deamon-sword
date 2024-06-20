"use client";

// import { Controller, Scene } from "react-scrollmagic";
import Image from "next/image";
import backgroundImage from "../../../public/images/background-clean.avif";
import backgroundMedos from "../../../public/images/background-medos.avif";

import useScrollReveal from "../../lib/scrollReveal/hooks/useScrollReveal";

const Background = () => {
	useScrollReveal(150);

	return (
		<>
			<div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: "-1", background: "#000" }}>
				<Image
					src={backgroundImage}
					alt="Background image"
					placeholder="blur"
					fill
					// sizes="100vw"
					objectFit="cover"
					className="backgroundFadeIn"
					style={{ maxWidth: "100vw", maxHeight: "100vh", opacity: 0.6, animation: "backgroundFadeIn 3s ease-in" }}
				/>

				<Image
					src={backgroundMedos}
					alt="Medos"
					fill
					// sizes="100vw"
					objectFit="cover"
					className="medosFadeIn"
					style={{ maxWidth: "100vw", maxHeight: "100vh", opacity: 0.8, top: "50%", animation: "medosFadeIn 0.5s ease-in" }}
				/>
			</div>
			{/* <div>
				<Controller>
					<Scene duration={600} pin>
						<div>Sticky Example</div>
					</Scene>
				</Controller>
			</div> */}
		</>
	);
};

export default Background;
