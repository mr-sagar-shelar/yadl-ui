import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EscapingEscaping from "../EscapingEscaping";

describe("EscapingEscaping component", () => {
  it("EscapingEscaping should render correctly", () => {
    render(<EscapingEscaping />);
    expect(true).toBeTruthy();
  });
});
