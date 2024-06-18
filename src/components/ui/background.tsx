"use client";

import Image from "next/image";

const Background = () => {
	return <Image src="/images/background-poster.png" alt="section" layout="fill" objectFit="cover" style={{ zIndex: "-1" }} />;
};

export default Background;
