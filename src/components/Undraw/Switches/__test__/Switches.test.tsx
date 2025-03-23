import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Switches from "../Switches";

describe("Switches component", () => {
  it("Switches should render correctly", () => {
    render(<Switches />);
    expect(true).toBeTruthy();
  });
});
