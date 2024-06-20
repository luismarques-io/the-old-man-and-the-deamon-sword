import { useEffect } from "react";
import { scrollReveal } from "../scrollReveal";

const useScrollReveal = (srPoint) => {
	useEffect(() => {
		window.addEventListener("scroll", () => scrollReveal());

		scrollReveal(srPoint);
	}, [srPoint]);
};

export default useScrollReveal;
