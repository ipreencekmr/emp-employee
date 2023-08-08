import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorBanner } from "../../src/components/ErrorBanner";

describe("ErrorBanner", () => {
    it("should render error banner", () => {
        render(<ErrorBanner></ErrorBanner>);
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("should render with correct title", () => {
        const { container } = render(<ErrorBanner></ErrorBanner>);
        expect(container.querySelector("h4")).toHaveTextContent("Error!");
    });

    it("should render with correct message", () => {
        const { container } = render(<ErrorBanner></ErrorBanner>);
        expect(container.querySelector("p"))
            .toHaveTextContent("Something went wrong! Please try again");
    });
});