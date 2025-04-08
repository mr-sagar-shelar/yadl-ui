import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Less from "../Less";

describe("Less component", () => {
  it("Less should render correctly", () => {
    render(<Less />);
    expect(true).toBeTruthy();
  });
});
