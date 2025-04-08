import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Steps from "../Steps";

describe("Steps component", () => {
  it("Steps should render correctly", () => {
    render(<Steps />);
    expect(true).toBeTruthy();
  });
});
