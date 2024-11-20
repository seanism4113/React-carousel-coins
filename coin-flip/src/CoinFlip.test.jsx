import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { beforeEach, afterEach, test, expect, vi } from "vitest";
import CoinFlip from "./CoinFlip";

it("renders without crashing", () => {
	render(<CoinFlip />);
});

it("does not render coin image when page loads", () => {
	const { container } = render(<CoinFlip />);
	expect(container.querySelector(".CoinFlip-image")).not.toBeInTheDocument();
});

it("does render coin when button clicked", () => {
	const { container } = render(<CoinFlip />);
	const coinFlip = container.querySelector(".CoinFlip-btn");
	fireEvent.click(coinFlip);

	expect(container.querySelector(".CoinFlip-image")).toBeInTheDocument();
});

it("increments heads and tails count correctly", () => {
	// Mock Math.random to control the outcomes
	const randomSpy = vi
		.spyOn(Math, "random") // Use `jest.spyOn` if using Jest
		.mockReturnValueOnce(0.25) // First flip is heads
		.mockReturnValueOnce(0.75); // Second flip is tails

	// Render the component
	render(<CoinFlip />);

	// Simulate first flip
	const flipButton = screen.getByRole("button", { name: /flip me/i });
	fireEvent.click(flipButton);

	// Assert the heads count increases
	expect(screen.getByText(/1 heads/i)).toBeInTheDocument();
	expect(screen.getByText(/1 flips/i)).toBeInTheDocument();

	// Simulate second flip
	fireEvent.click(flipButton);

	// Assert the tails count increases
	expect(screen.getByText(/1 tails/i)).toBeInTheDocument();
	expect(screen.getByText(/2 flips/i)).toBeInTheDocument();

	// Restore Math.random
	randomSpy.mockRestore();
});
