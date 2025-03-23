import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ice_creamIceCream from "../Ice_creamIceCream";

describe("Ice_creamIceCream component", () => {
  it("Ice_creamIceCream should render correctly", () => {
    render(<Ice_creamIceCream />);
    expect(true).toBeTruthy();
  });
});
