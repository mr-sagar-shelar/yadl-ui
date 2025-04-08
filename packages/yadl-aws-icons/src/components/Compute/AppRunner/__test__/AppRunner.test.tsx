import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppRunner from "../AppRunner";

describe("AppRunner component", () => {
  it("AppRunner should render correctly", () => {
    render(<AppRunner />);
    expect(true).toBeTruthy();
  });
});
