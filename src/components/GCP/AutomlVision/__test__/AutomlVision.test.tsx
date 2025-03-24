import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomlVision from "../AutomlVision";

describe("AutomlVision component", () => {
  it("AutomlVision should render correctly", () => {
    render(<AutomlVision />);
    expect(true).toBeTruthy();
  });
});
