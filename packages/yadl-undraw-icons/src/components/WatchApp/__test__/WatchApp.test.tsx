import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WatchApp from "../WatchApp";

describe("WatchApp component", () => {
  it("WatchApp should render correctly", () => {
    render(<WatchApp />);
    expect(true).toBeTruthy();
  });
});
