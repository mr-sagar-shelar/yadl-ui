import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UsersPerMinute from "../UsersPerMinute";

describe("UsersPerMinute component", () => {
  it("UsersPerMinute should render correctly", () => {
    render(<UsersPerMinute />);
    expect(true).toBeTruthy();
  });
});
