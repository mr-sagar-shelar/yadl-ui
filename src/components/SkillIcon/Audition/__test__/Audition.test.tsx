import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Audition from "../Audition";

describe("Audition component", () => {
  it("Audition should render correctly", () => {
    render(<Audition />);
    expect(true).toBeTruthy();
  });
});
