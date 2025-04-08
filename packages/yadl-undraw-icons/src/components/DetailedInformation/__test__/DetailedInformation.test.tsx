import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DetailedInformation from "../DetailedInformation";

describe("DetailedInformation component", () => {
  it("DetailedInformation should render correctly", () => {
    render(<DetailedInformation />);
    expect(true).toBeTruthy();
  });
});
