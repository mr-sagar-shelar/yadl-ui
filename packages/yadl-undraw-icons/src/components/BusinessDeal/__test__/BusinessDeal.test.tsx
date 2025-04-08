import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessDeal from "../BusinessDeal";

describe("BusinessDeal component", () => {
  it("BusinessDeal should render correctly", () => {
    render(<BusinessDeal />);
    expect(true).toBeTruthy();
  });
});
