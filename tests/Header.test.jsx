import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../src/pages/Header";
import CartContext from "../src/util/CartContext";
import { BrowserRouter } from "react-router-dom";
describe("<Header />", () => {
  const MockCartProvider = ({ children }) => (
    <CartContext.Provider value={[[]]}>{children}</CartContext.Provider>
  );
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MockCartProvider>
          <Header />
        </MockCartProvider>
      </BrowserRouter>
    );
  });
  it("renders header", () => {
    screen.debug();
  });
  it("renders title correclty", () => {
    const title = screen.getByText(/Shopping Cart/i);
    expect(title).toHaveClass("home");
  });
  it("renders list", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
