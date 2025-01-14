import { render, screen } from "@testing-library/react";
//explicitly import from vitest as you need to supress eslint
import { describe, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
