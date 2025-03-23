import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileApp from "../MobileApp";

describe("MobileApp component", () => {
  it("MobileApp should render correctly", () => {
    render(<MobileApp />);
    expect(true).toBeTruthy();
  });
});
