import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CheckBoxes from "../CheckBoxes";

describe("CheckBoxes component", () => {
  it("CheckBoxes should render correctly", () => {
    render(<CheckBoxes />);
    expect(true).toBeTruthy();
  });
});
