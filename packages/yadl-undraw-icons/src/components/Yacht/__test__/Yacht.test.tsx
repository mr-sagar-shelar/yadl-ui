import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Yacht from "../Yacht";

describe("Yacht component", () => {
  it("Yacht should render correctly", () => {
    render(<Yacht />);
    expect(true).toBeTruthy();
  });
});
