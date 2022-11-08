import { render, screen, cleanup } from "@testing-library/react";
import LoginButton from "../../buttons/LoginButton";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom"

test("login button shows up", () => {
    render(
        <BrowserRouter>
            <LoginButton />
        </BrowserRouter>
    );

    var button = screen.getByTestId("login-button");
    expect(button).toBeInTheDocument();
})
test("login button displays default text correctly", () => {
    render(
        <BrowserRouter>
            <LoginButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        label: /Login/i
      });
    expect(button).toHaveTextContent('Login')
})
test("login button displays text param correctly", () => {
    render(
        <BrowserRouter>
            <LoginButton label="New Label" />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        label: /Login/i
      });
    expect(button).toHaveTextContent('New Label')
})

test("login button has correct color", () => {
    render(
        <BrowserRouter>
            <LoginButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        color: /success/i
      });
    expect(button).toBeInTheDocument();
})



