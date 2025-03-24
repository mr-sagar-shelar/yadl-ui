import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudVisionApi from "../CloudVisionApi";

describe("CloudVisionApi component", () => {
  it("CloudVisionApi should render correctly", () => {
    render(<CloudVisionApi />);
    expect(true).toBeTruthy();
  });
});
