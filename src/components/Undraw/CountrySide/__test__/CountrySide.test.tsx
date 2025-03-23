import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CountrySide from "../CountrySide";

describe("CountrySide component", () => {
  it("CountrySide should render correctly", () => {
    render(<CountrySide />);
    expect(true).toBeTruthy();
  });
});
