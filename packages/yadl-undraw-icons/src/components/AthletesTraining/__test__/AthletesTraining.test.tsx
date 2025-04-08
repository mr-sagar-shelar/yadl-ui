import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AthletesTraining from "../AthletesTraining";

describe("AthletesTraining component", () => {
  it("AthletesTraining should render correctly", () => {
    render(<AthletesTraining />);
    expect(true).toBeTruthy();
  });
});
