import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Heavy_boxHeavyBox from "../Heavy_boxHeavyBox";

describe("Heavy_boxHeavyBox component", () => {
  it("Heavy_boxHeavyBox should render correctly", () => {
    render(<Heavy_boxHeavyBox />);
    expect(true).toBeTruthy();
  });
});
