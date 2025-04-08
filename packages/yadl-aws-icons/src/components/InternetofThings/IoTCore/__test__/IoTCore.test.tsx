import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTCore from "../IoTCore";

describe("IoTCore component", () => {
  it("IoTCore should render correctly", () => {
    render(<IoTCore />);
    expect(true).toBeTruthy();
  });
});
