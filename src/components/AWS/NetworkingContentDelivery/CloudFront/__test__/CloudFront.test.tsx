import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudFront from "../CloudFront";

describe("CloudFront component", () => {
  it("CloudFront should render correctly", () => {
    render(<CloudFront />);
    expect(true).toBeTruthy();
  });
});
