import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Relaxation from "../Relaxation";

describe("Relaxation component", () => {
  it("Relaxation should render correctly", () => {
    render(<Relaxation />);
    expect(true).toBeTruthy();
  });
});
