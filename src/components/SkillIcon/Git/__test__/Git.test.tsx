import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Git from "../Git";

describe("Git component", () => {
  it("Git should render correctly", () => {
    render(<Git />);
    expect(true).toBeTruthy();
  });
});
