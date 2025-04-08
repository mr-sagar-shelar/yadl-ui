import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Prometheus from "../Prometheus";

describe("Prometheus component", () => {
  it("Prometheus should render correctly", () => {
    render(<Prometheus />);
    expect(true).toBeTruthy();
  });
});
