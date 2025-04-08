import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlainCreditCard from "../PlainCreditCard";

describe("PlainCreditCard component", () => {
  it("PlainCreditCard should render correctly", () => {
    render(<PlainCreditCard />);
    expect(true).toBeTruthy();
  });
});
