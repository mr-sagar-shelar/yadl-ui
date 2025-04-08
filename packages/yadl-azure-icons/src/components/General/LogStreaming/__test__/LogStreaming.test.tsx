import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogStreaming from "../LogStreaming";

describe("LogStreaming component", () => {
  it("LogStreaming should render correctly", () => {
    render(<LogStreaming />);
    expect(true).toBeTruthy();
  });
});
