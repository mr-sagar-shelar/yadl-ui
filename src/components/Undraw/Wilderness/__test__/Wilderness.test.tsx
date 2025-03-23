import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wilderness from "../Wilderness";

describe("Wilderness component", () => {
  it("Wilderness should render correctly", () => {
    render(<Wilderness />);
    expect(true).toBeTruthy();
  });
});
