import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Visualization from "../Visualization";

describe("Visualization component", () => {
  it("Visualization should render correctly", () => {
    render(<Visualization />);
    expect(true).toBeTruthy();
  });
});
