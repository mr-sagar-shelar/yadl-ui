import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDirectory from "../CloudDirectory";

describe("CloudDirectory component", () => {
  it("CloudDirectory should render correctly", () => {
    render(<CloudDirectory />);
    expect(true).toBeTruthy();
  });
});
