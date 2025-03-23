import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudSync from "../CloudSync";

describe("CloudSync component", () => {
  it("CloudSync should render correctly", () => {
    render(<CloudSync />);
    expect(true).toBeTruthy();
  });
});
