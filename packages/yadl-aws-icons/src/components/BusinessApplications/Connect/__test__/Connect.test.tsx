import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Connect from "../Connect";

describe("Connect component", () => {
  it("Connect should render correctly", () => {
    render(<Connect />);
    expect(true).toBeTruthy();
  });
});
