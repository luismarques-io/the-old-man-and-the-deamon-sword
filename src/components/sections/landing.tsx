"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const Landing = () => {
	const t = useTranslations("Landing");
	const locale = useLocale();

	return (
		<header className="masthead">
			<Image src="/images/background-poster.png" alt="header" layout="fill" objectFit="cover" />
			<div className="container" style={{ position: "relative" }}>
				<div className="masthead-subheading">
					{t("title")} {locale}
				</div>
				<div className="masthead-heading text-uppercase">It&apos;s Nice To Meet You</div>
				<a className="btn btn-primary btn-xl text-uppercase" href="#services">
					Tell Me More
				</a>
			</div>
		</header>
	);
};

export default Landing;
