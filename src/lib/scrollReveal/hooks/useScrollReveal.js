import { useEffect } from "react";
import { scrollReveal } from "../scrollReveal";

const useScrollReveal = (srPoint) => {
	useEffect(() => {
		window.addEventListener("scroll", () => scrollReveal(srPoint));
		scrollReveal(0);
	}, [srPoint]);
};

export default useScrollReveal;
