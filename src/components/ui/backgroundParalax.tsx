"use client";

import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Image from "next/image";
import backgroundImage from "../../../public/images/background-clean.avif";
import backgroundMedos from "../../../public/images/background-medos.avif";

const ParallaxStyled = styled.div`
	/* .section {
		height: 110vh;
	} */

	.parallax {
		height: 500px;
		position: relative;
		overflow: hidden;

		img {
			width: 100%;
			height: auto;
			position: absolute;
		}

		h2 {
			position: absolute;
			left: 200px;
			text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
		}
	}
`;

const BackgroundParalax = () => {
	return (
		<>
			<div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: "-1", background: "#000" }}>
				<Image
					src={backgroundImage}
					alt="Background image"
					// placeholder="blur"
					fill
					// sizes="100vw"
					objectFit="cover"
					style={{ maxWidth: "100vw", maxHeight: "100vh", opacity: 0.6 }}
				/>

				<Image
					src={backgroundMedos}
					alt="Medos"
					fill
					// sizes="100vw"
					objectFit="cover"
					style={{ maxWidth: "100vw", maxHeight: "100vh", opacity: 0.8, top: "50%" }}
				/>
			</div>
			{/* <div>
				<Controller>
					<Scene duration={600} pin>
						<div>Sticky Example</div>
					</Scene>
				</Controller>
			</div> */}

			<ParallaxStyled>
				<Controller>
					<div className="section" />
					<Scene indicators={true} duration="200%" triggerHook="onEnter">
						<Timeline wrapper={<div className="parallax" />}>
							<Tween
								position="0"
								from={{
									yPercent: -50
								}}
								to={{
									yPercent: 0
								}}
							>
								<Image src={backgroundImage} alt="" />
							</Tween>
							<Tween
								position="0"
								from={{
									top: "0%",
									scale: 1.5
								}}
								to={{
									top: "70%",
									scale: 2
								}}
							>
								<h2>Das ist ein Titel</h2>
							</Tween>
						</Timeline>
					</Scene>
					<div className="section" />
				</Controller>
			</ParallaxStyled>
		</>
	);
};

export default BackgroundParalax;
