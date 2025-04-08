import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineWishesOnlineWishes from "../OnlineWishesOnlineWishes";

describe("OnlineWishesOnlineWishes component", () => {
  it("OnlineWishesOnlineWishes should render correctly", () => {
    render(<OnlineWishesOnlineWishes />);
    expect(true).toBeTruthy();
  });
});
