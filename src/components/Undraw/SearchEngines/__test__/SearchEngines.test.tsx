import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SearchEngines from "../SearchEngines";

describe("SearchEngines component", () => {
  it("SearchEngines should render correctly", () => {
    render(<SearchEngines />);
    expect(true).toBeTruthy();
  });
});
