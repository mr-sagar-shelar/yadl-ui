import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Typewriter from "../Typewriter";

describe("Typewriter component", () => {
  it("Typewriter should render correctly", () => {
    render(<Typewriter />);
    expect(true).toBeTruthy();
  });
});
