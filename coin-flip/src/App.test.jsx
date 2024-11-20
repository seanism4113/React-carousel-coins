import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("renders without crashing", () => {
	render(<App />);
});
