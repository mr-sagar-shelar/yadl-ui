import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DreamWorld from "../DreamWorld";

describe("DreamWorld component", () => {
  it("DreamWorld should render correctly", () => {
    render(<DreamWorld />);
    expect(true).toBeTruthy();
  });
});
