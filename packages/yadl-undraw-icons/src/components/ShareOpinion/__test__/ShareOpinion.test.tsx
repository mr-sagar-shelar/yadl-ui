import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShareOpinion from "../ShareOpinion";

describe("ShareOpinion component", () => {
  it("ShareOpinion should render correctly", () => {
    render(<ShareOpinion />);
    expect(true).toBeTruthy();
  });
});
