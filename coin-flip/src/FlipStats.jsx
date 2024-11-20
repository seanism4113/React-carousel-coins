const FlipStats = ({ headsCount, tailsCount }) => {
	const totalFlips = headsCount + tailsCount;

	return (
		<p>
			Out of {totalFlips} flips, there have been {headsCount} heads and {tailsCount} tails.
		</p>
	);
};

export default FlipStats;
