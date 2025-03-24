import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppFlow from "../AppFlow";

describe("AppFlow component", () => {
  it("AppFlow should render correctly", () => {
    render(<AppFlow />);
    expect(true).toBeTruthy();
  });
});
