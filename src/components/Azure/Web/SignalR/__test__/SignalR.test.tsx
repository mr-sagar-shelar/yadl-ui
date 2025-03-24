import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SignalR from "../SignalR";

describe("SignalR component", () => {
  it("SignalR should render correctly", () => {
    render(<SignalR />);
    expect(true).toBeTruthy();
  });
});
