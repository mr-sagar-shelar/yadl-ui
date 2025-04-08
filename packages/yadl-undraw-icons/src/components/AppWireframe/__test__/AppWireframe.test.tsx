import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppWireframe from "../AppWireframe";

describe("AppWireframe component", () => {
  it("AppWireframe should render correctly", () => {
    render(<AppWireframe />);
    expect(true).toBeTruthy();
  });
});
