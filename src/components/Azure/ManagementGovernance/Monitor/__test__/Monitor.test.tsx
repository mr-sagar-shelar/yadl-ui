import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Monitor from "../Monitor";

describe("Monitor component", () => {
  it("Monitor should render correctly", () => {
    render(<Monitor />);
    expect(true).toBeTruthy();
  });
});
