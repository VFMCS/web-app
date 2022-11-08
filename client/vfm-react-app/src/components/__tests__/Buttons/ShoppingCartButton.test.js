import { render, screen, cleanup } from "@testing-library/react";
import ShoppingCartButton from "../../buttons/ShoppingCartButton";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom"
import { expect } from "@jest/globals";

test("shopping cart button shows up", () => {
    render(
        <BrowserRouter>
            <ShoppingCartButton />
        </BrowserRouter>
    );

    var button = screen.getByTestId("shopping");
    expect(button).toBeInTheDocument();
})

test("shopping cart button displays correct variant", () => {
    render(
        <BrowserRouter>
            <ShoppingCartButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        variant: /contained/i
      });
    expect(button).toBeInTheDocument();
})

test("shopping cart button has correct color", () => {
    render(
        <BrowserRouter>
            <ShoppingCartButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        color: /secondary/i
      });
    expect(button).toBeInTheDocument();
})