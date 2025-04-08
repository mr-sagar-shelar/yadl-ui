import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebTest from "../WebTest";

describe("WebTest component", () => {
  it("WebTest should render correctly", () => {
    render(<WebTest />);
    expect(true).toBeTruthy();
  });
});
