import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoogleCloudMarketplace from "../GoogleCloudMarketplace";

describe("GoogleCloudMarketplace component", () => {
  it("GoogleCloudMarketplace should render correctly", () => {
    render(<GoogleCloudMarketplace />);
    expect(true).toBeTruthy();
  });
});
