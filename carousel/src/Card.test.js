import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

it("renders without crashing", () => {
	render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={0} totalNum={TEST_IMAGES.length} />);
});

it("should match snapshot", () => {
	const { asFragment } = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={0} totalNum={TEST_IMAGES.length} />);
	expect(asFragment()).toMatchSnapshot();
});
