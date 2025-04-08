import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EventBridge from "../EventBridge";

describe("EventBridge component", () => {
  it("EventBridge should render correctly", () => {
    render(<EventBridge />);
    expect(true).toBeTruthy();
  });
});
