"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Prizes from "../ui/prizes";

const Sponsors = () => {
	const t = useTranslations("Sponsors");
	const locale = useLocale();

	return (
		<section className="page-section pb-3 pt-4 trigger-change-background" id="sponsors">
			<div className="pt-3">
				<Prizes />
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<Image src={`/images/sponsors-and-credits-${locale}.avif`} alt={t("image-alt-text")} width={3400} height={4961} style={{ width: "100%", height: "auto" }} />
					</div>
				</div>
			</div>

			<div className="text-center pb-4 fs-5">
				<a href={t("press-release-link-url")} className="link" target="_blank">
					{t("press-release-link-text")}
				</a>
			</div>
		</section>
	);
};

export default Sponsors;
