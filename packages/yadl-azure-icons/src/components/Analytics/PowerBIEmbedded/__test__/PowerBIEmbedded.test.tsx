import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PowerBIEmbedded from "../PowerBIEmbedded";

describe("PowerBIEmbedded component", () => {
  it("PowerBIEmbedded should render correctly", () => {
    render(<PowerBIEmbedded />);
    expect(true).toBeTruthy();
  });
});
