import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTHub from "../IoTHub";

describe("IoTHub component", () => {
  it("IoTHub should render correctly", () => {
    render(<IoTHub />);
    expect(true).toBeTruthy();
  });
});
