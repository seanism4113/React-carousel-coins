import { useState } from "react";
import CoinFlip from "./CoinFlip";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CoinFlip />
		</>
	);
}

export default App;
