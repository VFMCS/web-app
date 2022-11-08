import { render, screen, cleanup } from "@testing-library/react";
import ConfirmEditButton from "../../buttons/ConfirmEditButton";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom"

test("Confirm Edit button shows up", () => {
    render(
        <BrowserRouter>
            <ConfirmEditButton />
        </BrowserRouter>
    );

    var button = screen.getByTestId("confirm");
    expect(button).toBeInTheDocument();
})
test("Confirm Edit button displays default text correctly", () => {
    render(
        <BrowserRouter>
            <ConfirmEditButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        label: /Login/i
      });
    expect(button).toHaveTextContent('Publish')
})
test("Confirm Edit button displays text param correctly", () => {
    render(
        <BrowserRouter>
            <ConfirmEditButton label="New Label" />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        label: /Login/i
      });
    expect(button).toHaveTextContent('New Label')
})

test("Confirm Edit button has correct color", () => {
    render(
        <BrowserRouter>
            <ConfirmEditButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        color: /success/i
      });
    expect(button).toBeInTheDocument();
})



