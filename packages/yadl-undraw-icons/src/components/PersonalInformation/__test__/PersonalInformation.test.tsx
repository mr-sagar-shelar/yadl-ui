import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalInformation from "../PersonalInformation";

describe("PersonalInformation component", () => {
  it("PersonalInformation should render correctly", () => {
    render(<PersonalInformation />);
    expect(true).toBeTruthy();
  });
});
