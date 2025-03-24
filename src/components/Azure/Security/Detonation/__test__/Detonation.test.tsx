import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Detonation from "../Detonation";

describe("Detonation component", () => {
  it("Detonation should render correctly", () => {
    render(<Detonation />);
    expect(true).toBeTruthy();
  });
});
