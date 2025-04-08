import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTRoboRunner from "../IoTRoboRunner";

describe("IoTRoboRunner component", () => {
  it("IoTRoboRunner should render correctly", () => {
    render(<IoTRoboRunner />);
    expect(true).toBeTruthy();
  });
});
