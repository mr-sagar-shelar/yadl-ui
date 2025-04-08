import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Firmware from "../Firmware";

describe("Firmware component", () => {
  it("Firmware should render correctly", () => {
    render(<Firmware />);
    expect(true).toBeTruthy();
  });
});
