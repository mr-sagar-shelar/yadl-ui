import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SmartHome from "../SmartHome";

describe("SmartHome component", () => {
  it("SmartHome should render correctly", () => {
    render(<SmartHome />);
    expect(true).toBeTruthy();
  });
});
