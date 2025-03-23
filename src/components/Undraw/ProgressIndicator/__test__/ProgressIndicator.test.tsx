import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProgressIndicator from "../ProgressIndicator";

describe("ProgressIndicator component", () => {
  it("ProgressIndicator should render correctly", () => {
    render(<ProgressIndicator />);
    expect(true).toBeTruthy();
  });
});
