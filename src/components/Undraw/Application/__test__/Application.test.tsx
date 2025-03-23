import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Application from "../Application";

describe("Application component", () => {
  it("Application should render correctly", () => {
    render(<Application />);
    expect(true).toBeTruthy();
  });
});
