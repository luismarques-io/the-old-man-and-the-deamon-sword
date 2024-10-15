"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Prizes from "../ui/prizes";

const Landing = () => {
	const t = useTranslations("Landing");
	const locale = useLocale();

	return (
		<section id="landing" className="p-0">
			<div className="container logo-container text-center">
				<Image
					src={`/images/title-${locale}.avif`}
					alt={t("image-alt-text")}
					width={3840}
					height={2160}
					sizes="100vw"
					className="m-auto fadeIn"
					style={{
						width: "100%",
						height: "auto",
						maxHeight: "100vh",
						maxWidth: "100vw",
						animation: "fadeIn 2s ease-in"
					}}
				/>
			</div>
		</section>
	);
};

export default Landing;
