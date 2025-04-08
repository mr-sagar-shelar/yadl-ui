import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Meditating from "../Meditating";

describe("Meditating component", () => {
  it("Meditating should render correctly", () => {
    render(<Meditating />);
    expect(true).toBeTruthy();
  });
});
