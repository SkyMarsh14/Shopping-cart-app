import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import itemCard from "./../src/components/itemCard";

describe("itemCard", () => {
  it("Renders price", () => {
    render(<itemCard />);
    expect(screen.getByRole(""));
  });
});
