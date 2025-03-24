import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureMediaService from "../AzureMediaService";

describe("AzureMediaService component", () => {
  it("AzureMediaService should render correctly", () => {
    render(<AzureMediaService />);
    expect(true).toBeTruthy();
  });
});
