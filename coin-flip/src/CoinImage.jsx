import heads from "./coin-front.jpg";
import tails from "./coin-back.jpg";

const CoinImage = ({ showImage, flipped, images }) => {
	return <>{showImage && <img className="CoinFlip-image" src={flipped ? heads : tails} />}</>;
};

export default CoinImage;
