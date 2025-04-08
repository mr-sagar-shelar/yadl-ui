import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogicApps from "../LogicApps";

describe("LogicApps component", () => {
  it("LogicApps should render correctly", () => {
    render(<LogicApps />);
    expect(true).toBeTruthy();
  });
});
