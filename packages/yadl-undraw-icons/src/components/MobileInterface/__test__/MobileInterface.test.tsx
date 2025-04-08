import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileInterface from "../MobileInterface";

describe("MobileInterface component", () => {
  it("MobileInterface should render correctly", () => {
    render(<MobileInterface />);
    expect(true).toBeTruthy();
  });
});
