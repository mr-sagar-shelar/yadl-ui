import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoogleKubernetesEngine from "../GoogleKubernetesEngine";

describe("GoogleKubernetesEngine component", () => {
  it("GoogleKubernetesEngine should render correctly", () => {
    render(<GoogleKubernetesEngine />);
    expect(true).toBeTruthy();
  });
});
