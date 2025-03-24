import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebsitePower from "../WebsitePower";

describe("WebsitePower component", () => {
  it("WebsitePower should render correctly", () => {
    render(<WebsitePower />);
    expect(true).toBeTruthy();
  });
});
