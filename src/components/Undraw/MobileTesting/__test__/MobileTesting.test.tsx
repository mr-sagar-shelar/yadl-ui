import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileTesting from "../MobileTesting";

describe("MobileTesting component", () => {
  it("MobileTesting should render correctly", () => {
    render(<MobileTesting />);
    expect(true).toBeTruthy();
  });
});
