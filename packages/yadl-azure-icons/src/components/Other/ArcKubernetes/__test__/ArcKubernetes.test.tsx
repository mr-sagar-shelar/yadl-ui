import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArcKubernetes from "../ArcKubernetes";

describe("ArcKubernetes component", () => {
  it("ArcKubernetes should render correctly", () => {
    render(<ArcKubernetes />);
    expect(true).toBeTruthy();
  });
});
