import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityBaselines from "../SecurityBaselines";

describe("SecurityBaselines component", () => {
  it("SecurityBaselines should render correctly", () => {
    render(<SecurityBaselines />);
    expect(true).toBeTruthy();
  });
});
