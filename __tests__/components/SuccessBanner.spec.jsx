import React from "react";
import { render, screen } from "@testing-library/react";
import { SuccessBanner } from "../../src/components/SuccessBanner";

describe("SuccessBanner", () => {
    it("should render error banner", () => {
        render(<SuccessBanner></SuccessBanner>);
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("should render with correct title", () => {
        const { container } = render(<SuccessBanner></SuccessBanner>);
        expect(container.querySelector("h4")).toHaveTextContent("Success!");
    });

    it("should render with correct message", () => {
        const { container } = render(<SuccessBanner></SuccessBanner>);
        expect(container.querySelector("p"))
            .toHaveTextContent("You have successfully updated record");
    });
});