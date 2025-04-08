import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChimeSDK from "../ChimeSDK";

describe("ChimeSDK component", () => {
  it("ChimeSDK should render correctly", () => {
    render(<ChimeSDK />);
    expect(true).toBeTruthy();
  });
});
