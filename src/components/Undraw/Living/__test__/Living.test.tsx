import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Living from "../Living";

describe("Living component", () => {
  it("Living should render correctly", () => {
    render(<Living />);
    expect(true).toBeTruthy();
  });
});
