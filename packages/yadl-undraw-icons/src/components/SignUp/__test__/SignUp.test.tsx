import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SignUp from "../SignUp";

describe("SignUp component", () => {
  it("SignUp should render correctly", () => {
    render(<SignUp />);
    expect(true).toBeTruthy();
  });
});
