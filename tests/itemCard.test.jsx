import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AddToCartBtn from "../src/components/AddToCartBtn";
import CartContext from "../src/util/CartContext";
describe("<AddToCartBtn />", () => {
  it("Renders button", () => {
    const itemData = {
      id: 1,
      title: "SimpleItem",
      image: "https://example.com/sample-item.jpg",
      rating: {
        rate: 4.5,
        count: 120,
      },
    };
    const mockSetCart = vi.fn();

    const MockCartProvider = ({ children }) => (
      <CartContext.Provider value={[[], mockSetCart]}>
        {children}
      </CartContext.Provider>
    );

    render(
      <MockCartProvider>
        <AddToCartBtn itemData={itemData} />
      </MockCartProvider>
    );

    const button = screen.getByRole("button", { name: /add to cart/i });
  });
});
