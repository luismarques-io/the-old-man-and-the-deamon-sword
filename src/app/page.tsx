import { getTranslations } from "@/i18n";
import i18nextConfig from "../../next-i18next.config";

import RedirectComponent from "@/lib/redirectComponent";

export async function generateMetadata() {
	const t = await getTranslations({ locale: i18nextConfig.i18n.defaultLocale });

	return {
		metadataBase: new URL("http://the-old-man-and-the-deamon-sword.fabiopowers.com/"),
		title: t("Index.title"),
		description: t("Index.description"),
		openGraph: {
			images: "/img/header-bg.jpg"
		}
	};
}

export default async function RootPage() {
	return <RedirectComponent />;
}
