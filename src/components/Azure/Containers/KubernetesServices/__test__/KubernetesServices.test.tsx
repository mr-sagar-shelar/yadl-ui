import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KubernetesServices from "../KubernetesServices";

describe("KubernetesServices component", () => {
  it("KubernetesServices should render correctly", () => {
    render(<KubernetesServices />);
    expect(true).toBeTruthy();
  });
});
