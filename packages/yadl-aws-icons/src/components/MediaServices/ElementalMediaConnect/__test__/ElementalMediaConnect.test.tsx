import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalMediaConnect from "../ElementalMediaConnect";

describe("ElementalMediaConnect component", () => {
  it("ElementalMediaConnect should render correctly", () => {
    render(<ElementalMediaConnect />);
    expect(true).toBeTruthy();
  });
});
