import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Grafana from "../Grafana";

describe("Grafana component", () => {
  it("Grafana should render correctly", () => {
    render(<Grafana />);
    expect(true).toBeTruthy();
  });
});
