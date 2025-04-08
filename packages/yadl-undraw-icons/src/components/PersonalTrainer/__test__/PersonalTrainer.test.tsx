import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalTrainer from "../PersonalTrainer";

describe("PersonalTrainer component", () => {
  it("PersonalTrainer should render correctly", () => {
    render(<PersonalTrainer />);
    expect(true).toBeTruthy();
  });
});
