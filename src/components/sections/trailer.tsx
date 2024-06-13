"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import YouTube from "react-youtube";

const Trailer = () => {
	const t = useTranslations("Trailer");

	return (
		<section className="page-section" id="trailer">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase">{t("title")}</h2>
				</div>
				{/* <div className="row">
					<div className="col-md-4">
						<Image src={`/images/tonho-with-sword.png`} alt={t("image-alt-text")} width={2678} height={2082} style={{ width: "100%", height: "auto" }} />
					</div>
					<div className="col-md-8 mt-5">
						<YouTube videoId={t("video-id")} opts={{ height: "420", width: "100%" }} />
					</div>
				</div> */}
				<div className="row">
					<div className="col-md-12 mt-5 video-responsive">
						<YouTube videoId={t("video-id")} opts={{ height: "100%", width: "100%" }} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trailer;
