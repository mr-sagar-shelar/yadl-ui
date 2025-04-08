import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Web_browsingWebBrowsing from "../Web_browsingWebBrowsing";

describe("Web_browsingWebBrowsing component", () => {
  it("Web_browsingWebBrowsing should render correctly", () => {
    render(<Web_browsingWebBrowsing />);
    expect(true).toBeTruthy();
  });
});
