"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Prizes from "../ui/prizes";

const Landing = () => {
	const t = useTranslations("Landing");
	const tScreenings = useTranslations("Screenings");
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

			{/* Cinema Release Banner */}
			<div className="landing-cinema-release mx-auto">
				<div className="cinema-release-highlight p-3 p-md-4">
					<div className="row align-items-center justify-content-center g-3">
						<div className="col-auto text-center">
							<h4 className="cinema-release-title text-uppercase mb-1" style={{ fontSize: "1.6rem" }}>
								{tScreenings("cinema-release.title")}
							</h4>
							<p className="cinema-release-date mb-0" style={{ fontSize: "1.2rem" }}>
								{tScreenings("cinema-release.date")}
							</p>
						</div>
						<div className="col-auto">
							<div className="cinema-release-underline" style={{ width: "60px", height: "1px", margin: "0 auto" }} />
						</div>
						<div className="col-auto text-center">
							<p className="cinema-distributor-text mb-1 fw-semibold" style={{ fontSize: "0.9rem" }}>
								{tScreenings("cinema-release.distributor")}
							</p>
							<div className="distributor-logo-container p-2 rounded mx-auto" style={{ maxWidth: "150px" }}>
								<Image
									src="/images/logos/cinema-distributor/cinetoscopio-logo-branco.png"
									alt={tScreenings("cinema-release.distributor-logo-alt")}
									width={150}
									height={38}
									className="distributor-logo"
									style={{ maxWidth: "140px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
