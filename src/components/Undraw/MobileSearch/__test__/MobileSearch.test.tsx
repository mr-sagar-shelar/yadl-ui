import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileSearch from "../MobileSearch";

describe("MobileSearch component", () => {
  it("MobileSearch should render correctly", () => {
    render(<MobileSearch />);
    expect(true).toBeTruthy();
  });
});
