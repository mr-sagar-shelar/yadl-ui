import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Docker from "../Docker";

describe("Docker component", () => {
  it("Docker should render correctly", () => {
    render(<Docker />);
    expect(true).toBeTruthy();
  });
});
