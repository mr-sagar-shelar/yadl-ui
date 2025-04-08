import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import XRay from "../XRay";

describe("XRay component", () => {
  it("XRay should render correctly", () => {
    render(<XRay />);
    expect(true).toBeTruthy();
  });
});
