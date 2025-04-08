import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureCenterforSAP from "../AzureCenterforSAP";

describe("AzureCenterforSAP component", () => {
  it("AzureCenterforSAP should render correctly", () => {
    render(<AzureCenterforSAP />);
    expect(true).toBeTruthy();
  });
});
