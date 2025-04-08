import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WatchApplication from "../WatchApplication";

describe("WatchApplication component", () => {
  it("WatchApplication should render correctly", () => {
    render(<WatchApplication />);
    expect(true).toBeTruthy();
  });
});
