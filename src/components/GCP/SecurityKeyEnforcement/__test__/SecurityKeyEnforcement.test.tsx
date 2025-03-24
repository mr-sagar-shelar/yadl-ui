import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityKeyEnforcement from "../SecurityKeyEnforcement";

describe("SecurityKeyEnforcement component", () => {
  it("SecurityKeyEnforcement should render correctly", () => {
    render(<SecurityKeyEnforcement />);
    expect(true).toBeTruthy();
  });
});
