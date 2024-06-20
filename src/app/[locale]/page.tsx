import Navbar from "@/components/navigation/NavBar";
import Gallery from "@/components/sections/gallery";
import Landing from "@/components/sections/landing";
import Screenings from "@/components/sections/screenings";
import SocialFooter from "@/components/sections/socialFooter";
import Sponsors from "@/components/sections/sponsors";
import Store from "@/components/sections/store";
import Synopsis from "@/components/sections/synopsis";
import Trailer from "@/components/sections/trailer";
import Background from "@/components/ui/background";
// import Parallax from "@/components/ui/paralax";
import { getTranslations } from "@/i18n";

interface PageProps {
	params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		metadataBase: new URL(t("baseUrl") as string),
		title: t("title"),
		description: t("description"),
		openGraph: {
			images: t("openGraph.images")
		}
	};
}

const Page = async ({ params: { locale } }: PageProps) => {
	return (
		<div>
			{/* <Parallax /> */}
			<Background />
			<Navbar />
			<Landing />
			<Synopsis />
			<Trailer />
			<Screenings />
			<Gallery />
			{/* <Store /> */}
			<SocialFooter />
			<Sponsors />
		</div>
	);
};

export default Page;
