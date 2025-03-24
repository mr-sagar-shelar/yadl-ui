import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SonicDash from "../SonicDash";

describe("SonicDash component", () => {
  it("SonicDash should render correctly", () => {
    render(<SonicDash />);
    expect(true).toBeTruthy();
  });
});
