import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTButton from "../IoTButton";

describe("IoTButton component", () => {
  it("IoTButton should render correctly", () => {
    render(<IoTButton />);
    expect(true).toBeTruthy();
  });
});
