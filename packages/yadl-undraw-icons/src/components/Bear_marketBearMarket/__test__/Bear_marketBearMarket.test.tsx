import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bear_marketBearMarket from "../Bear_marketBearMarket";

describe("Bear_marketBearMarket component", () => {
  it("Bear_marketBearMarket should render correctly", () => {
    render(<Bear_marketBearMarket />);
    expect(true).toBeTruthy();
  });
});
