"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Slider, { Settings, LazyLoadTypes } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
	const t = useTranslations("Gallery");
	const locale = useLocale();
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		import(`../../i18n/messages/${locale}.json`).then((data) => {
			setData(data.default || data);
		});
	}, [locale]);

	if (!data?.Gallery?.images) {
		return null;
	}

	const imageKeys = Object.keys(data.Gallery.images);

	var sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: "progressive" as LazyLoadTypes,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: false
				}
			}
		]
	} as Settings;

	return (
		<section className="page-section scrollreveal trigger-change-background" id="gallery">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase scrollreveal__frombottom">{t("title")}</h2>
				</div>
				<div className="row">
					<div className="col-md-4 mt-5 scrollreveal__frombottom scrollreveal__delay025">
						<div className="mx-md-2 shadow-lg">
							<Image src={`/images/poster-${locale}.avif`} alt={t("poster-alt-text")} className="shadow" width={3400} height={4961} style={{ width: "100%", height: "auto" }} />
						</div>
					</div>
					<div className="col-md-8 mt-5 ps-md-5 pt-md-5 scrollreveal__frombottom scrollreveal__delay050">
						<Slider {...sliderSettings}>
							{imageKeys.map((key) => (
								<div key={key}>
									<Image src={t(`images.${key}.src`)} alt={t(`images.${key}.alt`)} width={2048} height={1365} style={{ width: "100%", height: "auto" }} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
