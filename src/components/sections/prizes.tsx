"use client";

import PrizesContainer from "../ui/prizes";

const Prizes = () => {
	return (
		<section id="prizes" className="p-0 trigger-change-background">
			<div className="container prizes-container text-center scrollreveal">
				<div className="scrollreveal__frombottom">
					<PrizesContainer />
				</div>
			</div>
		</section>
	);
};

export default Prizes;
