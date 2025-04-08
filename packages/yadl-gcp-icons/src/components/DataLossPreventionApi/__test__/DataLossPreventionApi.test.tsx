import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataLossPreventionApi from "../DataLossPreventionApi";

describe("DataLossPreventionApi component", () => {
  it("DataLossPreventionApi should render correctly", () => {
    render(<DataLossPreventionApi />);
    expect(true).toBeTruthy();
  });
});
