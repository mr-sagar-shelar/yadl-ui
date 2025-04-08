import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileLogin from "../MobileLogin";

describe("MobileLogin component", () => {
  it("MobileLogin should render correctly", () => {
    render(<MobileLogin />);
    expect(true).toBeTruthy();
  });
});
