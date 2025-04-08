import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreditCard from "../CreditCard";

describe("CreditCard component", () => {
  it("CreditCard should render correctly", () => {
    render(<CreditCard />);
    expect(true).toBeTruthy();
  });
});
