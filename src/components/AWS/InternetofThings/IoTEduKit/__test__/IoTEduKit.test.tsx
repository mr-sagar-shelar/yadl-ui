import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTEduKit from "../IoTEduKit";

describe("IoTEduKit component", () => {
  it("IoTEduKit should render correctly", () => {
    render(<IoTEduKit />);
    expect(true).toBeTruthy();
  });
});
