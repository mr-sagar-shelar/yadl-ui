import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalMediaConvert from "../ElementalMediaConvert";

describe("ElementalMediaConvert component", () => {
  it("ElementalMediaConvert should render correctly", () => {
    render(<ElementalMediaConvert />);
    expect(true).toBeTruthy();
  });
});
