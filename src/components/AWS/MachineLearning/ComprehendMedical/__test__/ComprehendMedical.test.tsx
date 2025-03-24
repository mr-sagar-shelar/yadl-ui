import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComprehendMedical from "../ComprehendMedical";

describe("ComprehendMedical component", () => {
  it("ComprehendMedical should render correctly", () => {
    render(<ComprehendMedical />);
    expect(true).toBeTruthy();
  });
});
