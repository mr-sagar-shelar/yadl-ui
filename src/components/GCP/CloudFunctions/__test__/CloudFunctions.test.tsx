import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudFunctions from "../CloudFunctions";

describe("CloudFunctions component", () => {
  it("CloudFunctions should render correctly", () => {
    render(<CloudFunctions />);
    expect(true).toBeTruthy();
  });
});
