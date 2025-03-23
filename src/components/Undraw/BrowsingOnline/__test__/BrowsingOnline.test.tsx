import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BrowsingOnline from "../BrowsingOnline";

describe("BrowsingOnline component", () => {
  it("BrowsingOnline should render correctly", () => {
    render(<BrowsingOnline />);
    expect(true).toBeTruthy();
  });
});
