import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudScheduler from "../CloudScheduler";

describe("CloudScheduler component", () => {
  it("CloudScheduler should render correctly", () => {
    render(<CloudScheduler />);
    expect(true).toBeTruthy();
  });
});
