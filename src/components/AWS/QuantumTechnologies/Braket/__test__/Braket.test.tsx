import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Braket from "../Braket";

describe("Braket component", () => {
  it("Braket should render correctly", () => {
    render(<Braket />);
    expect(true).toBeTruthy();
  });
});
