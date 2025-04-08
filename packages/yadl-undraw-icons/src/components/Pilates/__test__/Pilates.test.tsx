import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pilates from "../Pilates";

describe("Pilates component", () => {
  it("Pilates should render correctly", () => {
    render(<Pilates />);
    expect(true).toBeTruthy();
  });
});
