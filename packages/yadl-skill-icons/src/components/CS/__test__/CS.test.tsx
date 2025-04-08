import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CS from "../CS";

describe("CS component", () => {
  it("CS should render correctly", () => {
    render(<CS />);
    expect(true).toBeTruthy();
  });
});
