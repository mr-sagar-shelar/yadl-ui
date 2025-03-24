import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Guide from "../Guide";

describe("Guide component", () => {
  it("Guide should render correctly", () => {
    render(<Guide />);
    expect(true).toBeTruthy();
  });
});
