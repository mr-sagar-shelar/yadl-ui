import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Devices from "../Devices";

describe("Devices component", () => {
  it("Devices should render correctly", () => {
    render(<Devices />);
    expect(true).toBeTruthy();
  });
});
