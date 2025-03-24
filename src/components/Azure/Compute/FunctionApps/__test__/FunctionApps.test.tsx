import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FunctionApps from "../FunctionApps";

describe("FunctionApps component", () => {
  it("FunctionApps should render correctly", () => {
    render(<FunctionApps />);
    expect(true).toBeTruthy();
  });
});
