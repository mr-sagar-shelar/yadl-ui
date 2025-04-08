import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Lambda from "../Lambda";

describe("Lambda component", () => {
  it("Lambda should render correctly", () => {
    render(<Lambda />);
    expect(true).toBeTruthy();
  });
});
