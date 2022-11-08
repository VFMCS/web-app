import { render, screen, cleanup } from "@testing-library/react";
import LoginButton from "../../buttons/LoginButton";
import "@testing-library/jest-dom";

test("login button shows correct text", () => {
    render(<LoginButton />)

    var textElem = screen.getByTestId("text");
    expect(textElem).toBeInTheDocument();
})