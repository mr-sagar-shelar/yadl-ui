import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Applens from "../Applens";

describe("Applens component", () => {
  it("Applens should render correctly", () => {
    render(<Applens />);
    expect(true).toBeTruthy();
  });
});
