import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mobile_imagesMobileImages from "../Mobile_imagesMobileImages";

describe("Mobile_imagesMobileImages component", () => {
  it("Mobile_imagesMobileImages should render correctly", () => {
    render(<Mobile_imagesMobileImages />);
    expect(true).toBeTruthy();
  });
});
