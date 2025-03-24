import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DialogflowCx from "../DialogflowCx";

describe("DialogflowCx component", () => {
  it("DialogflowCx should render correctly", () => {
    render(<DialogflowCx />);
    expect(true).toBeTruthy();
  });
});
