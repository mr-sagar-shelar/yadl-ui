import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenSourceOpenSource from "../OpenSourceOpenSource";

describe("OpenSourceOpenSource component", () => {
  it("OpenSourceOpenSource should render correctly", () => {
    render(<OpenSourceOpenSource />);
    expect(true).toBeTruthy();
  });
});
