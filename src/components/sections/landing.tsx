"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Prizes from "../ui/prizes";

const Landing = () => {
	const t = useTranslations("Landing");
	const locale = useLocale();

	return (
		<section className="p-0" style={{ height: "100vh", display: "flex", alignItems: "center", position: "relative", paddingBottom: "1em !important" }}>
			<div className="container text-center" style={{ position: "relative" }}>
				<Image
					src={`/images/title-${locale}.avif`}
					alt={t("image-alt-text")}
					width={3840}
					height={2160}
					sizes="100vw"
					className="m-auto"
					style={{ width: "100%", height: "auto", maxHeight: "100vh", maxWidth: "100vw" }}
				/>
			</div>
			<div
				className="text-center"
				style={{
					position: "absolute",
					bottom: 20,
					left: 0,
					width: "100%"
				}}
			>
				<Prizes />
			</div>
		</section>
	);
};

export default Landing;
