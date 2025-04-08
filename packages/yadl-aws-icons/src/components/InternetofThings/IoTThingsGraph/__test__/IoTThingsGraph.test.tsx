import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTThingsGraph from "../IoTThingsGraph";

describe("IoTThingsGraph component", () => {
  it("IoTThingsGraph should render correctly", () => {
    render(<IoTThingsGraph />);
    expect(true).toBeTruthy();
  });
});
