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
	const showCity = Boolean(data?.Screenings?.["table-head"]?.city);
	const showCountry = Boolean(data?.Screenings?.["table-head"]?.country);

	return (
		<section className="page-section scrollreveal trigger-change-background" id="screenings">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase scrollreveal__frombottom">{t("title")}</h2>
				</div>

				{/* Cinema Release Section */}
				<div className="row mb-5">
					<div className="col-12">
						<div className="cinema-release-highlight p-4 p-md-5 rounded shadow-lg">
							<div className="row align-items-center position-relative">
								<div className="col-md-7 text-center ">
									<div className="scrollreveal__frombottom">
										<h3 className="cinema-release-title section-heading text-uppercase mb-3">{t("cinema-release.title")}</h3>
										<div className="cinema-date-container scrollreveal__frombottom scrollreveal__delay025">
											<p className="cinema-release-date lead mb-3">{t("cinema-release.date")}</p>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="text-center scrollreveal__frombottom scrollreveal__delay050">
										<p className="cinema-distributor-text mb-3 fw-semibold">{t("cinema-release.distributor")}</p>
										<div className="distributor-logo-container p-3 rounded">
											<Image
												src="/images/logos/cinema-distributor/cinetoscopio-logo-branco.png"
												alt={t("cinema-release.distributor-logo-alt")}
												width={300}
												height={75}
												className="distributor-logo"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Festival Screenings Section */}
				<div className="text-center mb-4">
					<h3 className="section-heading text-uppercase scrollreveal__frombottom">{t("festivals-title")}</h3>
				</div>

				<div className="row">
					<div className="position-relative z-1 col-md-5 scrollreveal__frombottom scrollreveal__delay050">
						<div className="image-container">
							<Image
								src={`/images/masariy-raptor.avif`}
								alt={t("image-alt-text")}
								width={2678}
								height={2082}
								style={{ width: "105%", height: "auto", position: "relative", top: "50px", left: "-20px" }}
							/>
						</div>
					</div>
					<div className="col-md-7 mt-5">
						<div className="table-container">
							<table className="table">
								<thead>
									<tr>
										<th scope="col">{t("table-head.date")}</th>
										<th scope="col">{t("table-head.location")}</th>
										{showCity && <th scope="col">{t("table-head.city")}</th>}
										{showCountry && <th scope="col">{t("table-head.country")}</th>}
									</tr>
								</thead>
								<tbody>
									{rowKeys.map((key) => (
										<tr key={key}>
											<th scope="row">
												<div className="py-1" style={{ whiteSpace: "pre-line" }}>
													{t(`table.${key}.date`)}
												</div>
											</th>
											<td>
												<div className="py-1">
													{data?.Screenings?.table?.[key]?.link ? (
														<a href={data.Screenings.table[key].link} target="_blank" rel="noopener noreferrer" className="link">
															{t(`table.${key}.location`)}
														</a>
													) : (
														<span>{t(`table.${key}.location`)}</span>
													)}
												</div>
											</td>
											{showCity && (
												<td>
													<div className="py-1">{t(`table.${key}.city`)}</div>
												</td>
											)}
											{showCountry && (
												<td>
													<div className="py-1">{t(`table.${key}.country`)}</div>
												</td>
											)}
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
