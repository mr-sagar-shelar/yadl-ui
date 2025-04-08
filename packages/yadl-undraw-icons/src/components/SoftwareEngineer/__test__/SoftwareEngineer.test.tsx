import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SoftwareEngineer from "../SoftwareEngineer";

describe("SoftwareEngineer component", () => {
  it("SoftwareEngineer should render correctly", () => {
    render(<SoftwareEngineer />);
    expect(true).toBeTruthy();
  });
});
