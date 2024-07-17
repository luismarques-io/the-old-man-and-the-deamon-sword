"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

import { useEffect, useState } from "react";

const Screenings = () => {
	const t = useTranslations("Screenings");
	const locale = useLocale();
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		import(`../../i18n/messages/${locale}.json`).then((data) => {
			setData(data.default || data);
		});
	}, [locale]);

	if (!data?.Screenings?.table) {
		return null;
	}

	const rowKeys = Object.keys(data.Screenings.table);

	return (
		<section className="page-section scrollreveal trigger-change-background" id="screenings">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase scrollreveal__frombottom">{t("title")}</h2>
				</div>
				<div className="row">
					<div className="position-relative z-1 col-md-6 scrollreveal__frombottom scrollreveal__delay050">
						<div className="image-container">
							<Image src={`/images/masariy-raptor.avif`} alt={t("image-alt-text")} width={2678} height={2082} style={{ width: "100%", height: "auto" }} />
						</div>
					</div>
					<div className="col-md-6 mt-5">
						<div className="table-container">
							<table className="table">
								<thead>
									<tr>
										<th scope="col">{t("table-head.date")}</th>
										<th scope="col">{t("table-head.location")}</th>
										<th scope="col">{t("table-head.city")}</th>
										<th scope="col">{t("table-head.country")}</th>
									</tr>
								</thead>
								<tbody>
									{rowKeys.map((key) => (
										<tr key={key}>
											<th scope="row">
												<div className="py-3">{t(`table.${key}.date`)}</div>
											</th>
											<td>
												<div className="py-3">{t(`table.${key}.location`)}</div>
											</td>
											<td>
												<div className="py-3">{t(`table.${key}.city`)}</div>
											</td>
											<td>
												<div className="py-3">{t(`table.${key}.country`)}</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Screenings;
