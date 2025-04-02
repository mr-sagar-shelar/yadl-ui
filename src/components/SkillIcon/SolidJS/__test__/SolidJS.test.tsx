import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SolidJS from "../SolidJS";

describe("SolidJS component", () => {
  it("SolidJS should render correctly", () => {
    render(<SolidJS />);
    expect(true).toBeTruthy();
  });
});
