import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ether from "../Ether";

describe("Ether component", () => {
  it("Ether should render correctly", () => {
    render(<Ether />);
    expect(true).toBeTruthy();
  });
});
