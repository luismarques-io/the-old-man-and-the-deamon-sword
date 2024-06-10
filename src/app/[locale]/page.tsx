import Gallery from "@/components/sections/gallery";
import Landing from "@/components/sections/landing";
import Screenings from "@/components/sections/screenings";
import Sponsors from "@/components/sections/sponsors";
import Store from "@/components/sections/store";
import Synopsis from "@/components/sections/synopsis";
import Trailer from "@/components/sections/trailer";
import { getTranslations } from "@/i18n";

interface PageProps {
	params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
	const t = await getTranslations({ locale });

	return {
		title: t("Index.title"),
		description: t("Index.title")
	};
}

const Page = async ({ params: { locale } }: PageProps) => {
	const t = await getTranslations({ locale });

	// You can also provide a namespace to the getTranslations config
	// like so: getTranslations({ locale, namespace: "Index" })
	// And then use t("title")
	return (
		<div>
			{t("Index.title")}
			<Landing />
			<Synopsis />
			<Trailer />
			<Synopsis />
			<Screenings />
			<Gallery />
			<Store />
			<Sponsors />
		</div>
	);
};

export default Page;
