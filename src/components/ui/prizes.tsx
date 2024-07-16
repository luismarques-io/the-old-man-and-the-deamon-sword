import Image from "next/image";

const Prizes = () => {
	return (
		<div className="prizes">
			<a href="https://www.motelx.org/filmes/o-velho-e-a-espada" className="btn-prize" target="_blank" rel="noopener noreferrer">
				<Image
					src={`/images/prizes/motelx2024_laurels-official_selection-white.avif`}
					alt="MotelX 2024 Official Selection"
					width={1772}
					height={552}
					style={{ width: "auto", height: 100 }}
				/>
			</a>
			<a href="https://fantasiafestival.com/en/film/the-old-man-and-the-demon-sword" className="btn-prize" target="_blank" rel="noopener noreferrer">
				<Image
					src={`/images/prizes/Fantasia2024-OfficialSelection-EN-darkmode.png`}
					alt="Fantasia 2024 Official Selection"
					width={1772}
					height={552}
					style={{ width: "auto", height: 100 }}
				/>
			</a>
			<a href="https://www.litlaughs.com/lit-scares-international-film-festival/" className="btn-prize" target="_blank" rel="noopener noreferrer">
				<Image
					src={`/images/prizes/OFFICIALSELECTION-LitScaresInternationalHorrorFestival-2024.avif`}
					alt="Lit Scares International Horror Festival 2024 Official Selection"
					width={1772}
					height={552}
					style={{ width: "auto", height: 100 }}
				/>
			</a>
		</div>
	);
};

export default Prizes;
