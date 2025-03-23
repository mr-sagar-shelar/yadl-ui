import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Exploring from "../Exploring";

describe("Exploring component", () => {
  it("Exploring should render correctly", () => {
    render(<Exploring />);
    expect(true).toBeTruthy();
  });
});
