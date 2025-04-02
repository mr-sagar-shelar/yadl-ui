import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MaterialUI from "../MaterialUI";

describe("MaterialUI component", () => {
  it("MaterialUI should render correctly", () => {
    render(<MaterialUI />);
    expect(true).toBeTruthy();
  });
});
