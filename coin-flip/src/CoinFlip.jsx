import { useState } from "react";
import CoinImage from "./CoinImage";
import FlipStats from "./FlipStats";
import "./CoinFlip.css";

const CoinFlip = () => {
	const [flipped, setFlipped] = useState(false);
	const [headsCount, setHeadsCount] = useState(0);
	const [tailsCount, setTailsCount] = useState(0);
	const [showImage, setShowImage] = useState(false);

	const flipCoin = () => {
		const isHeads = Math.floor(Math.random() * 2) === 0;
		setFlipped(isHeads);
		setShowImage(true);

		isHeads ? setHeadsCount(headsCount + 1) : setTailsCount(tailsCount + 1);
	};

	return (
		<div className="CoinFlip">
			<h1>Let's flip a coin!</h1>
			<CoinImage showImage={showImage} flipped={flipped} images={CoinImage} />
			<div>
				<button className="CoinFlip-btn" onClick={flipCoin}>
					Flip Me
				</button>
				<FlipStats headsCount={headsCount} tailsCount={tailsCount} />
			</div>
		</div>
	);
};

export default CoinFlip;
