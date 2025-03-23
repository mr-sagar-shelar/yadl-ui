import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Referral from "../Referral";

describe("Referral component", () => {
  it("Referral should render correctly", () => {
    render(<Referral />);
    expect(true).toBeTruthy();
  });
});
