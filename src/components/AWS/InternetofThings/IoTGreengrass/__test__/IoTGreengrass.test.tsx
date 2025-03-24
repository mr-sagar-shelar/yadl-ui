import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTGreengrass from "../IoTGreengrass";

describe("IoTGreengrass component", () => {
  it("IoTGreengrass should render correctly", () => {
    render(<IoTGreengrass />);
    expect(true).toBeTruthy();
  });
});
