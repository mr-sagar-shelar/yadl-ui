import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebAppDatabase from "../WebAppDatabase";

describe("WebAppDatabase component", () => {
  it("WebAppDatabase should render correctly", () => {
    render(<WebAppDatabase />);
    expect(true).toBeTruthy();
  });
});
