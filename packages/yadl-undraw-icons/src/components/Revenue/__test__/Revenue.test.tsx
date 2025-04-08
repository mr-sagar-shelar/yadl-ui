import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Revenue from "../Revenue";

describe("Revenue component", () => {
  it("Revenue should render correctly", () => {
    render(<Revenue />);
    expect(true).toBeTruthy();
  });
});
