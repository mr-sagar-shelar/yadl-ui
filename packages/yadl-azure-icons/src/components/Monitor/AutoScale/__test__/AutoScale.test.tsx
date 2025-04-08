import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutoScale from "../AutoScale";

describe("AutoScale component", () => {
  it("AutoScale should render correctly", () => {
    render(<AutoScale />);
    expect(true).toBeTruthy();
  });
});
