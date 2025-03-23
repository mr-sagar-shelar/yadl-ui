import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Thoughts from "../Thoughts";

describe("Thoughts component", () => {
  it("Thoughts should render correctly", () => {
    render(<Thoughts />);
    expect(true).toBeTruthy();
  });
});
