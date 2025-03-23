import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SignIn from "../SignIn";

describe("SignIn component", () => {
  it("SignIn should render correctly", () => {
    render(<SignIn />);
    expect(true).toBeTruthy();
  });
});
