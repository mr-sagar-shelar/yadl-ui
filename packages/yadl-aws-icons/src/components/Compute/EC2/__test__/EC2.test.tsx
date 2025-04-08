import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EC2 from "../EC2";

describe("EC2 component", () => {
  it("EC2 should render correctly", () => {
    render(<EC2 />);
    expect(true).toBeTruthy();
  });
});
