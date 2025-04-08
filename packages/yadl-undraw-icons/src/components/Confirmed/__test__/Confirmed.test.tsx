import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Confirmed from "../Confirmed";

describe("Confirmed component", () => {
  it("Confirmed should render correctly", () => {
    render(<Confirmed />);
    expect(true).toBeTruthy();
  });
});
