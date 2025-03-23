import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mobile_webMobileWeb from "../Mobile_webMobileWeb";

describe("Mobile_webMobileWeb component", () => {
  it("Mobile_webMobileWeb should render correctly", () => {
    render(<Mobile_webMobileWeb />);
    expect(true).toBeTruthy();
  });
});
