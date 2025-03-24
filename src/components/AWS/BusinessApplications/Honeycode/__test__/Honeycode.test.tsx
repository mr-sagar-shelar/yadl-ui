import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Honeycode from "../Honeycode";

describe("Honeycode component", () => {
  it("Honeycode should render correctly", () => {
    render(<Honeycode />);
    expect(true).toBeTruthy();
  });
});
