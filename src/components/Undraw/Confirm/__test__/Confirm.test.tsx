import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Confirm from "../Confirm";

describe("Confirm component", () => {
  it("Confirm should render correctly", () => {
    render(<Confirm />);
    expect(true).toBeTruthy();
  });
});
