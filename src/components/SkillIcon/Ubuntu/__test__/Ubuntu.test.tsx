import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ubuntu from "../Ubuntu";

describe("Ubuntu component", () => {
  it("Ubuntu should render correctly", () => {
    render(<Ubuntu />);
    expect(true).toBeTruthy();
  });
});
