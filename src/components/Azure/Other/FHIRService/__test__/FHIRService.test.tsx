import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FHIRService from "../FHIRService";

describe("FHIRService component", () => {
  it("FHIRService should render correctly", () => {
    render(<FHIRService />);
    expect(true).toBeTruthy();
  });
});
