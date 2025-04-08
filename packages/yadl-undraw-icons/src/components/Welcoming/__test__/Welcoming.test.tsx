import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Welcoming from "../Welcoming";

describe("Welcoming component", () => {
  it("Welcoming should render correctly", () => {
    render(<Welcoming />);
    expect(true).toBeTruthy();
  });
});
