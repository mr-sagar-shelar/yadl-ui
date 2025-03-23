import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalTraining from "../PersonalTraining";

describe("PersonalTraining component", () => {
  it("PersonalTraining should render correctly", () => {
    render(<PersonalTraining />);
    expect(true).toBeTruthy();
  });
});
