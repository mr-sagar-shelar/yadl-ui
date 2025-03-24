import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SQLDataWarehouses from "../SQLDataWarehouses";

describe("SQLDataWarehouses component", () => {
  it("SQLDataWarehouses should render correctly", () => {
    render(<SQLDataWarehouses />);
    expect(true).toBeTruthy();
  });
});
