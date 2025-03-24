import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SoftwareasaService from "../SoftwareasaService";

describe("SoftwareasaService component", () => {
  it("SoftwareasaService should render correctly", () => {
    render(<SoftwareasaService />);
    expect(true).toBeTruthy();
  });
});
