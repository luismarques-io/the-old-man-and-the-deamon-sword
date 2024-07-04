import Image from "next/image";

const Prizes = () => {
	return (
		<div className="text-center">
			<a href="https://fantasiafestival.com/en/film/the-old-man-and-the-demon-sword" className="btn-prize" target="_blank" rel="noopener noreferrer">
				<Image
					src={`/images/prizes/Fantasia2024-OfficialSelection-EN-darkmode.png`}
					alt="Fantasia2024 OfficialSelection"
					width={1772}
					height={552}
					style={{ maxWidth: 300, height: "auto" }}
				/>
			</a>
		</div>
	);
};

export default Prizes;
