import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTEvents from "../IoTEvents";

describe("IoTEvents component", () => {
  it("IoTEvents should render correctly", () => {
    render(<IoTEvents />);
    expect(true).toBeTruthy();
  });
});
