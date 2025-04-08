import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebsiteSetup from "../WebsiteSetup";

describe("WebsiteSetup component", () => {
  it("WebsiteSetup should render correctly", () => {
    render(<WebsiteSetup />);
    expect(true).toBeTruthy();
  });
});
