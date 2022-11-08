import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom"
import { expect } from "@jest/globals";
import UploadButton from "../../buttons/UploadButton"

test("upload button shows up", () => {
    render(
        <BrowserRouter>
            <UploadButton />
        </BrowserRouter>
    );

    var button = screen.getByTestId("upload");
    expect(button).toBeInTheDocument();
})

test("upload button displays text correctly", () => {
    render(
        <BrowserRouter>
            <UploadButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        label: /Upload/i
      });
    expect(button).toBeInTheDocument();
})

test("upload button has correct color", () => {
    render(
        <BrowserRouter>
            <UploadButton />
        </BrowserRouter>
    );

    var button = screen.getByRole('button', {
        color: /secondary/i
      });
    expect(button).toBeInTheDocument();
})