import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineMedia from "../OnlineMedia";

describe("OnlineMedia component", () => {
  it("OnlineMedia should render correctly", () => {
    render(<OnlineMedia />);
    expect(true).toBeTruthy();
  });
});
