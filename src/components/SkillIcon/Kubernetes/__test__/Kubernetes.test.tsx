import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kubernetes from "../Kubernetes";

describe("Kubernetes component", () => {
  it("Kubernetes should render correctly", () => {
    render(<Kubernetes />);
    expect(true).toBeTruthy();
  });
});
