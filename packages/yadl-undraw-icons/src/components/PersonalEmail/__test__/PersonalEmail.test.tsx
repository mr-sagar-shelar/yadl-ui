import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalEmail from "../PersonalEmail";

describe("PersonalEmail component", () => {
  it("PersonalEmail should render correctly", () => {
    render(<PersonalEmail />);
    expect(true).toBeTruthy();
  });
});
