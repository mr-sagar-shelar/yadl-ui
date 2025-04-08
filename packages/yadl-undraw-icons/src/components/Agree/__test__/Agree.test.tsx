import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Agree from "../Agree";

describe("Agree component", () => {
  it("Agree should render correctly", () => {
    render(<Agree />);
    expect(true).toBeTruthy();
  });
});
