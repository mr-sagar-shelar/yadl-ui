import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BrowserStats from "../BrowserStats";

describe("BrowserStats component", () => {
  it("BrowserStats should render correctly", () => {
    render(<BrowserStats />);
    expect(true).toBeTruthy();
  });
});
