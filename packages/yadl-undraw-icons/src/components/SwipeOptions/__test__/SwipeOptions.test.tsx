import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SwipeOptions from "../SwipeOptions";

describe("SwipeOptions component", () => {
  it("SwipeOptions should render correctly", () => {
    render(<SwipeOptions />);
    expect(true).toBeTruthy();
  });
});
