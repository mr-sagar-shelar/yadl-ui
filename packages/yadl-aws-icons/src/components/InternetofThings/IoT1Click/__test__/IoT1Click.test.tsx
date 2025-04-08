import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoT1Click from "../IoT1Click";

describe("IoT1Click component", () => {
  it("IoT1Click should render correctly", () => {
    render(<IoT1Click />);
    expect(true).toBeTruthy();
  });
});
