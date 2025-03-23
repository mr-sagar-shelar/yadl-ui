import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Photograph from "../Photograph";

describe("Photograph component", () => {
  it("Photograph should render correctly", () => {
    render(<Photograph />);
    expect(true).toBeTruthy();
  });
});
