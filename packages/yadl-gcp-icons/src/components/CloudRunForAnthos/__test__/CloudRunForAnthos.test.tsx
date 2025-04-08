import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudRunForAnthos from "../CloudRunForAnthos";

describe("CloudRunForAnthos component", () => {
  it("CloudRunForAnthos should render correctly", () => {
    render(<CloudRunForAnthos />);
    expect(true).toBeTruthy();
  });
});
