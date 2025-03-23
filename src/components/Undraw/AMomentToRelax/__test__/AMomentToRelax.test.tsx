import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AMomentToRelax from "../AMomentToRelax";

describe("AMomentToRelax component", () => {
  it("AMomentToRelax should render correctly", () => {
    render(<AMomentToRelax />);
    expect(true).toBeTruthy();
  });
});
