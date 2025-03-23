import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Order_a_carOrderACar from "../Order_a_carOrderACar";

describe("Order_a_carOrderACar component", () => {
  it("Order_a_carOrderACar should render correctly", () => {
    render(<Order_a_carOrderACar />);
    expect(true).toBeTruthy();
  });
});
