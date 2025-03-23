import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileContent from "../MobileContent";

describe("MobileContent component", () => {
  it("MobileContent should render correctly", () => {
    render(<MobileContent />);
    expect(true).toBeTruthy();
  });
});
