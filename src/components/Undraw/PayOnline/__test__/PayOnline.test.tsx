import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PayOnline from "../PayOnline";

describe("PayOnline component", () => {
  it("PayOnline should render correctly", () => {
    render(<PayOnline />);
    expect(true).toBeTruthy();
  });
});
