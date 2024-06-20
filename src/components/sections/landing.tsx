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
			<div
				className="text-center scrollreveal"
				style={{
					position: "absolute",
					bottom: 20,
					left: 0,
					width: "100%"
				}}
			>
				<div className="scrollreveal__frombottom scrollreveal__delay1">
					<Prizes />
				</div>
			</div>
		</section>
	);
};

export default Landing;
