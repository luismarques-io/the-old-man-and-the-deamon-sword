"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import YouTube from "react-youtube";

const Trailer = () => {
	const t = useTranslations("Trailer");

	return (
		<section className="page-section scrollreveal" id="trailer">
			<div className="container">
				<div className="text-center scrollreveal__frombottom">
					<h2 className="section-heading text-uppercase">{t("title")}</h2>
				</div>
				<div className="row scrollreveal__frombottom scrollreveal__delay025">
					<div className="col-md-12 mt-5 video-responsive">
						<YouTube videoId={t("video-id")} opts={{ height: "100%", width: "100%" }} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trailer;
