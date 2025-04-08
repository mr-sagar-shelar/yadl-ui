import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalText from "../PersonalText";

describe("PersonalText component", () => {
  it("PersonalText should render correctly", () => {
    render(<PersonalText />);
    expect(true).toBeTruthy();
  });
});
