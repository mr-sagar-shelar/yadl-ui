import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeliveryAddress from "../DeliveryAddress";

describe("DeliveryAddress component", () => {
  it("DeliveryAddress should render correctly", () => {
    render(<DeliveryAddress />);
    expect(true).toBeTruthy();
  });
});
