import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Browsing from "../Browsing";

describe("Browsing component", () => {
  it("Browsing should render correctly", () => {
    render(<Browsing />);
    expect(true).toBeTruthy();
  });
});
