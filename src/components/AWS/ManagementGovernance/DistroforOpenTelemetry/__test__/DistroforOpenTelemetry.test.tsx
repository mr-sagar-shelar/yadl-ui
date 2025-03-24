import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DistroforOpenTelemetry from "../DistroforOpenTelemetry";

describe("DistroforOpenTelemetry component", () => {
  it("DistroforOpenTelemetry should render correctly", () => {
    render(<DistroforOpenTelemetry />);
    expect(true).toBeTruthy();
  });
});
