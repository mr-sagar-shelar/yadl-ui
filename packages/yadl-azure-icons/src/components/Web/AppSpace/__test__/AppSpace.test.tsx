import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppSpace from "../AppSpace";

describe("AppSpace component", () => {
  it("AppSpace should render correctly", () => {
    render(<AppSpace />);
    expect(true).toBeTruthy();
  });
});
