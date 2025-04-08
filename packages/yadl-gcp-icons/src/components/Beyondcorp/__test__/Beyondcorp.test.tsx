import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Beyondcorp from "../Beyondcorp";

describe("Beyondcorp component", () => {
  it("Beyondcorp should render correctly", () => {
    render(<Beyondcorp />);
    expect(true).toBeTruthy();
  });
});
