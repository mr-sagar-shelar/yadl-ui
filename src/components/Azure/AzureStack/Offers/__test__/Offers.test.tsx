import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Offers from "../Offers";

describe("Offers component", () => {
  it("Offers should render correctly", () => {
    render(<Offers />);
    expect(true).toBeTruthy();
  });
});
