"use client";

import Image from "next/image";
import backgroundImage from "../../../public/images/background-poster.png";

const Background = () => {
	// return <Image src={backgroundImage} alt="Background image" layout="fill" objectFit="cover" style={{ zIndex: "-1" }} />;
	return (
		<div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: "-1", background: "#000" }}>
			<Image src={backgroundImage} alt="Background image" placeholder="blur" fill sizes="100vw" objectFit="cover" style={{ maxWidth: "100vw", maxHeight: "100vh", opacity: 0.6 }} />
		</div>
	);
};

export default Background;
