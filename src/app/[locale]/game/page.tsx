import Navbar from "@/components/navigation/NavBar";
import Background from "@/components/ui/background";
import { getTranslations } from "@/i18n";
import Image from "next/image";
import "../styles/game-page.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface PageProps {
	params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		metadataBase: new URL(t("baseUrl") as string),
		title: `${t("title")} - Game`,
		description: t("description"),
		openGraph: {
			images: t("openGraph.images")
		},
		icons: {
			icon: "/images/icon.png",
			shortcut: "/images/icon.png",
			apple: "/images/icon.png"
		}
	};
}

const GamePage = async ({ params: { locale } }: PageProps) => {
	const t = await getTranslations({ locale, namespace: "Game" });

	return (
		<div className="min-vh-100 d-flex flex-column">
			<Background />

			<div className="navbar-movie-link">
				<div className="container d-flex justify-content-start">
					<a href="../" className="back-to-movie">
						<i className="bi bi-film"></i>
						{t("return-to-movie")}
					</a>
				</div>
			</div>

			<Navbar />

			<main className="container py-5 flex-grow-1" style={{ paddingTop: "calc(3rem + 42px)" }}>
				<div className="row justify-content-center">
					<div className="col-12 col-xl-10">
						<div className="game-card p-4 p-md-5">
							<h1 className="game-title mb-4">
								<span className="title-text">{t("title")}</span>
								<br />
								<span className="game-subtitle">{t("subtitle")}</span>
							</h1>

							<div className="text-center mb-5 img-container">
								<img src="/images/game/O Velho e a Espada - snapshot 1.png" alt="Screenshot do jogo O Velho e a Espada" className="game-hero-image img-fluid" />
								<div className="mt-3 platform-info">
									<span className="coming-soon-badge me-2">{t("coming-soon")}</span>
									{t("platforms")}
								</div>
							</div>

							<div className="game-section">
								<h2 className="h3 d-inline-block">{t("development.title")}</h2>

								<div className="mb-4">
									<h3>
										<i className="bi bi-controller"></i>
										{t("development.game-dev.title")}
									</h3>
									<p className="mb-0 lead">{t("development.game-dev.description")}</p>
								</div>

								<div className="mb-4">
									<h3>
										<i className="bi bi-brush"></i>
										{t("development.art.title")}
									</h3>
									<p className="mb-0 lead">{t("development.art.description")}</p>
								</div>

								<div className="mb-4">
									<h3>
										<i className="bi bi-music-note-beamed"></i>
										{t("development.music.title")}
									</h3>
									<p className="mb-0 lead">{t("development.music.description")}</p>
								</div>
							</div>

							<div className="section-divider divider-features" aria-hidden="true"></div>

							<div className="game-features">
								<div className="features-container">
									<div className="text-center">
										<h3 className="h3 d-inline-block mb-4">{t("game-features.title")}</h3>
									</div>
									<p className="lead text-center mb-4">{t("game-features.description")}</p>
									<div className="d-flex gap-2 flex-wrap justify-content-center">
										<span className="feature-badge">
											<i className="bi bi-joystick"></i>
											{t("game-features.action")}
										</span>
										<span className="feature-badge">
											<i className="bi bi-music-note"></i>
											{t("game-features.soundtrack")}
										</span>
										<span className="feature-badge">
											<i className="bi bi-phone"></i>
											{t("game-features.mobile")}
										</span>
										<span className="feature-badge">
											<i className="bi bi-palette"></i>
											{t("game-features.graphics")}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<div className="developer-showcase py-5">
				<div className="container">
					<div className="developer-title-wrapper">
						<h4 className="developer-title">{t("developed-by")}</h4>
					</div>
					<div className="developer-logos">
						<div className="developer-logo-item">
							<img src="/images/game/Ninestudios_Logo_White.webp" alt="Ninestudios Games logo" className="partner-logo" />
							<div className="developer-name">Ninestudios Games</div>
						</div>
						<div className="developer-logo-item">
							<img src="/images/game/Spaniard_logo.png" alt="Spaniard Animation Studios logo" className="partner-logo" />
							<div className="developer-name">Spaniard Animation Studios</div>
						</div>
						<div className="developer-logo-item">
							<img src="/images/game/ZeConsciencia.png" alt="Zé Consciência logo" className="partner-logo" />
							<div className="developer-name">Zé Consciência</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePage;
