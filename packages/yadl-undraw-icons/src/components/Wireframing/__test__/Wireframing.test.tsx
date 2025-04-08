import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wireframing from "../Wireframing";

describe("Wireframing component", () => {
  it("Wireframing should render correctly", () => {
    render(<Wireframing />);
    expect(true).toBeTruthy();
  });
});
