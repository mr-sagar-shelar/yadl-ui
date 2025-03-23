import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineCv from "../OnlineCv";

describe("OnlineCv component", () => {
  it("OnlineCv should render correctly", () => {
    render(<OnlineCv />);
    expect(true).toBeTruthy();
  });
});
