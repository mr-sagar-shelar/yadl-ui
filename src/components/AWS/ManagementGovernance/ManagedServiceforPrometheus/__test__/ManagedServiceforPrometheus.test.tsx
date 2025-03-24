import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedServiceforPrometheus from "../ManagedServiceforPrometheus";

describe("ManagedServiceforPrometheus component", () => {
  it("ManagedServiceforPrometheus should render correctly", () => {
    render(<ManagedServiceforPrometheus />);
    expect(true).toBeTruthy();
  });
});
