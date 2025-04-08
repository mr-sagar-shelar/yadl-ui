import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebsiteBuilder from "../WebsiteBuilder";

describe("WebsiteBuilder component", () => {
  it("WebsiteBuilder should render correctly", () => {
    render(<WebsiteBuilder />);
    expect(true).toBeTruthy();
  });
});
