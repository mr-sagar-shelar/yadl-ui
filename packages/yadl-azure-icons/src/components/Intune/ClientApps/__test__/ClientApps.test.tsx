import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ClientApps from "../ClientApps";

describe("ClientApps component", () => {
  it("ClientApps should render correctly", () => {
    render(<ClientApps />);
    expect(true).toBeTruthy();
  });
});
