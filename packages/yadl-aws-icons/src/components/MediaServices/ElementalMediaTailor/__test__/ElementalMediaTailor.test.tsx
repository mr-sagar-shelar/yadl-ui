import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalMediaTailor from "../ElementalMediaTailor";

describe("ElementalMediaTailor component", () => {
  it("ElementalMediaTailor should render correctly", () => {
    render(<ElementalMediaTailor />);
    expect(true).toBeTruthy();
  });
});
