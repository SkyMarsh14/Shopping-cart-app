import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home.jsx";
import { describe, it, expect } from "vitest";

describe("Homepage component", () => {
  it("Renders correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /welcome to the awesome shop/i
    );
  });
});
