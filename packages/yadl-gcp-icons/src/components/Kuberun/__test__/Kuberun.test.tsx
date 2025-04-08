import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kuberun from "../Kuberun";

describe("Kuberun component", () => {
  it("Kuberun should render correctly", () => {
    render(<Kuberun />);
    expect(true).toBeTruthy();
  });
});
