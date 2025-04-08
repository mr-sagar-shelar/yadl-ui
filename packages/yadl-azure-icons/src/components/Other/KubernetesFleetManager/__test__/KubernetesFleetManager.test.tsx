import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KubernetesFleetManager from "../KubernetesFleetManager";

describe("KubernetesFleetManager component", () => {
  it("KubernetesFleetManager should render correctly", () => {
    render(<KubernetesFleetManager />);
    expect(true).toBeTruthy();
  });
});
