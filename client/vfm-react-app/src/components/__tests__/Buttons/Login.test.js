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