import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Powerful from "../Powerful";

describe("Powerful component", () => {
  it("Powerful should render correctly", () => {
    render(<Powerful />);
    expect(true).toBeTruthy();
  });
});
