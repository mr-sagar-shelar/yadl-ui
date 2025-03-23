import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Onboarding from "../Onboarding";

describe("Onboarding component", () => {
  it("Onboarding should render correctly", () => {
    render(<Onboarding />);
    expect(true).toBeTruthy();
  });
});
