"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const Landing = () => {
	const t = useTranslations("Landing");
	const locale = useLocale();

	return (
		// <header className="masthead" style={{ height: "100vh" }}>
		// <section className="p-0 pb-5">
		<section className="p-0" style={{ height: "100vh", display: "flex", alignItems: "center" }}>
			{/* <Image src="/images/background-poster.png" alt="section" layout="fill" objectFit="cover" /> */}
			<div className="container text-center" style={{ position: "relative" }}>
				<Image
					src={`/images/title-${locale}.png`}
					alt="title"
					width={3840}
					height={2160}
					sizes="100vw"
					className="m-auto"
					style={{ width: "100%", height: "auto", maxHeight: "100vh", maxWidth: "100vw" }}
				/>
				{/* <div className="masthead-subheading">
					{t("title")} {locale}
				</div>
				<div className="masthead-heading text-uppercase">It&apos;s Nice To Meet You</div>
				<a className="btn btn-primary btn-xl text-uppercase" href="#services">
					Tell Me More
				</a> */}
			</div>
		</section>
	);
};

export default Landing;
