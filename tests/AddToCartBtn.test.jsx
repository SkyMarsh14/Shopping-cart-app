import AddToCartBtn from "../src/components/AddToCartBtn";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import CartContext from "../src/util/CartContext";

describe("<AddToCartBtn />", () => {
  const itemData = {
    id: 1,
    title: "SimpleItem",
    image: "https://example.com/sample-item.jpg",
    count: 120,
    rating: {
      rate: 4.5,
    },
  };
  const mockSetCart = vi.fn();

  const MockCartProvider = ({ children }) => {
    return (
      <CartContext.Provider value={[[], mockSetCart]}>
        {children}
      </CartContext.Provider>
    );
  };

  beforeEach(() => {
    render(
      <MockCartProvider>
        <AddToCartBtn itemData={itemData} />
      </MockCartProvider>
    );
  });

  it("Renders button", () => {
    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });
  it("fires an event on click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);
    expect(mockSetCart).toHaveBeenCalledTimes(1);
  });
  it("Increments the count on click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);
  });
});
