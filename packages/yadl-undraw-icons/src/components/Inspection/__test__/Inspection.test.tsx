import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Inspection from "../Inspection";

describe("Inspection component", () => {
  it("Inspection should render correctly", () => {
    render(<Inspection />);
    expect(true).toBeTruthy();
  });
});
