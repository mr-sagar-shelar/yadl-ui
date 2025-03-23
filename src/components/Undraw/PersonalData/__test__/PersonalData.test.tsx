import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalData from "../PersonalData";

describe("PersonalData component", () => {
  it("PersonalData should render correctly", () => {
    render(<PersonalData />);
    expect(true).toBeTruthy();
  });
});
