import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Flutter from "../Flutter";

describe("Flutter component", () => {
  it("Flutter should render correctly", () => {
    render(<Flutter />);
    expect(true).toBeTruthy();
  });
});
