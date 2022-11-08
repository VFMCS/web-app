import { render, screen, cleanup } from "@testing-library/react";
import SignUpButton from "../../buttons/SignUpButton";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom"
import { expect } from "@jest/globals";

test("sign up button shows up", () => {
    render(
        <BrowserRouter>
            <SignUpButton />
        </BrowserRouter>
    );

    var button = screen.getByTestId("signup-button");
    expect(button).toBeInTheDocument();
})

test("sign up button displays text correctly", () => {
    render(
        <BrowserRouter>
            <SignUpButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        label: /Sign up/i
      });
    expect(button).toBeInTheDocument();
})

test("sign up button has correct color", () => {
    render(
        <BrowserRouter>
            <SignUpButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        color: /secondary/i
      });
    expect(button).toBeInTheDocument();
})



