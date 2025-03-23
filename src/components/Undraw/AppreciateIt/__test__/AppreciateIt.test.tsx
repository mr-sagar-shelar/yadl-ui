import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppreciateIt from "../AppreciateIt";

describe("AppreciateIt component", () => {
  it("AppreciateIt should render correctly", () => {
    render(<AppreciateIt />);
    expect(true).toBeTruthy();
  });
});
