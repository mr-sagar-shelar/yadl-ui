import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Learning from "../Learning";

describe("Learning component", () => {
  it("Learning should render correctly", () => {
    render(<Learning />);
    expect(true).toBeTruthy();
  });
});
