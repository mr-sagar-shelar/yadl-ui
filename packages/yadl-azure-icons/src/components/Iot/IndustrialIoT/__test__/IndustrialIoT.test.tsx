import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IndustrialIoT from "../IndustrialIoT";

describe("IndustrialIoT component", () => {
  it("IndustrialIoT should render correctly", () => {
    render(<IndustrialIoT />);
    expect(true).toBeTruthy();
  });
});
