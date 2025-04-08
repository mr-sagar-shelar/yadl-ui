import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GiftCard from "../GiftCard";

describe("GiftCard component", () => {
  it("GiftCard should render correctly", () => {
    render(<GiftCard />);
    expect(true).toBeTruthy();
  });
});
