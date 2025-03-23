import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LearningSketching from "../LearningSketching";

describe("LearningSketching component", () => {
  it("LearningSketching should render correctly", () => {
    render(<LearningSketching />);
    expect(true).toBeTruthy();
  });
});
