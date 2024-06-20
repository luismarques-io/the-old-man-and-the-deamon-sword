"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import SocialButtons from "../ui/socialButtons";

const Synopsis = () => {
	const t = useTranslations("Synopsis");

	return (
		<section className="page-section mt-5 scrollreveal trigger-change-background" id="synopsis">
			<div className="container">
				<div className="text-center scrollreveal__frombottom">
					<h2 className="section-heading text-uppercase">{t("title")}</h2>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="main-character-container scrollreveal__frombottom scrollreveal__delay050">
							<Image src={`/images/tonho-with-sword.avif`} alt={t("image-alt-text")} width={2678} height={2082} style={{ width: "100%", height: "auto" }} />
						</div>
					</div>
					<div className="col-md-6 mt-5">
						<p className="scrollreveal__frombottom scrollreveal__delay025" style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
							{t("text")}
						</p>
						<div className="d-flex justify-content-end scrollreveal__frombottom scrollreveal__delay075">
							<a href="https://www.imdb.com/title/tt17677998/?ref_=ext_shr_lnk" target="_blank" rel="noopener noreferrer">
								<Image src={`/images/logos/imdb-logo.png`} alt="IMDb" width={100} height={50} />
							</a>
						</div>
						<div className="d-flex justify-content-end pt-3 scrollreveal__frombottom scrollreveal__delay1">
							<SocialButtons />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Synopsis;
