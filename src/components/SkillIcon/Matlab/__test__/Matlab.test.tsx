import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Matlab from "../Matlab";

describe("Matlab component", () => {
  it("Matlab should render correctly", () => {
    render(<Matlab />);
    expect(true).toBeTruthy();
  });
});
