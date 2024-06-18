"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Sponsors = () => {
	const t = useTranslations("Sponsors");
	const locale = useLocale();

	return (
		<section className="page-section pb-3" id="sponsors">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase">{t("title")}</h2>
				</div>

				<div className="row">
					<div className="col-md-12">
						<Image src={`/images/sponsors-and-credits-${locale}.png`} alt={t("image-alt-text")} width={3400} height={4961} style={{ width: "100%", height: "auto" }} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
