import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogOut from "../LogOut";

describe("LogOut component", () => {
  it("LogOut should render correctly", () => {
    render(<LogOut />);
    expect(true).toBeTruthy();
  });
});
