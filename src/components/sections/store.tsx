"use client";

import { useTranslations } from "next-intl";

const Store = () => {
	const t = useTranslations("Store");

	return (
		<section className="page-section scrollreveal trigger-change-background" id="store">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase scrollreveal__frombottom">{t("title")}</h2>
				</div>
				<div className="row">
					<div className="col-md-12 scrollreveal__frombottom scrollreveal__delay025">
						<h4 className="text-center my-5">TODO</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Store;
