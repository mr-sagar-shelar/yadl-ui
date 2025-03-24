import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogicAppsCustomConnector from "../LogicAppsCustomConnector";

describe("LogicAppsCustomConnector component", () => {
  it("LogicAppsCustomConnector should render correctly", () => {
    render(<LogicAppsCustomConnector />);
    expect(true).toBeTruthy();
  });
});
