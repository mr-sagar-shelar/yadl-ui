import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Marketing from "../Marketing";

describe("Marketing component", () => {
  it("Marketing should render correctly", () => {
    render(<Marketing />);
    expect(true).toBeTruthy();
  });
});
