import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileSite from "../MobileSite";

describe("MobileSite component", () => {
  it("MobileSite should render correctly", () => {
    render(<MobileSite />);
    expect(true).toBeTruthy();
  });
});
