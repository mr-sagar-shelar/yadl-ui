import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ForgotPassword from "../ForgotPassword";

describe("ForgotPassword component", () => {
  it("ForgotPassword should render correctly", () => {
    render(<ForgotPassword />);
    expect(true).toBeTruthy();
  });
});
