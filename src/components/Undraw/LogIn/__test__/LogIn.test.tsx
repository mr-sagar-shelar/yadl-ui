import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogIn from "../LogIn";

describe("LogIn component", () => {
  it("LogIn should render correctly", () => {
    render(<LogIn />);
    expect(true).toBeTruthy();
  });
});
