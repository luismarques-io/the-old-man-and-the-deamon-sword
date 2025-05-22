"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Game = () => {
	const t = useTranslations("Game");
	const locale = useLocale();

	return (
		<section id="game" className="page-section">
			<div className="container py-5">
				<div className="game-card scrollreveal p-4 p-md-5">
					<div className="text-center mb-4">
						<h2 className="game-title mb-3 scrollreveal__frombottom">
							<span className="title-text">{t("title")}</span>
							<br />
							<span className="game-subtitle">{t("subtitle")}</span>
						</h2>
					</div>

					<div className="game-section no-hover scrollreveal mb-0">
						<div className="screenshot-frame scrollreveal__frombottom">
							<div className="screenshot-corner top-left"></div>
							<div className="screenshot-corner top-right"></div>
							<div className="screenshot-corner bottom-left"></div>
							<div className="screenshot-corner bottom-right"></div>

							<div className="screenshot-glow"></div>
							<img src="/images/game/O Velho e a Espada - snapshot 1.png" alt="Game screenshot" className="game-hero-image no-hover img-fluid" />

							<div className="screenshot-overlay"></div>
							<div className="screenshot-effect-wrapper">
								<div className="screenshot-effect"></div>
							</div>
						</div>

						<div className="text-center mt-5">
							<p className="lead mb-4 scrollreveal__frombottom scrollreveal__delay025">{t("section-description")}</p>
							<div className="scrollreveal__frombottom scrollreveal__delay050">
								<Link href={`/${locale}/game`} className="btn btn-xl btn-primary game-btn">
									{t("discover-game")}
								</Link>
								<div className="mt-3 platform-info">
									<span className="coming-soon-badge me-2">{t("coming-soon")}</span>
									{t("platforms")}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Game;
