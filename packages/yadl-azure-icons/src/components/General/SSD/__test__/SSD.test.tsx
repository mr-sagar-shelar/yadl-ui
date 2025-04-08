import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SSD from "../SSD";

describe("SSD component", () => {
  it("SSD should render correctly", () => {
    render(<SSD />);
    expect(true).toBeTruthy();
  });
});
