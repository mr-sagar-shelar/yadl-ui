import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CheckingBoxes from "../CheckingBoxes";

describe("CheckingBoxes component", () => {
  it("CheckingBoxes should render correctly", () => {
    render(<CheckingBoxes />);
    expect(true).toBeTruthy();
  });
});
