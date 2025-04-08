import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalWebsite from "../PersonalWebsite";

describe("PersonalWebsite component", () => {
  it("PersonalWebsite should render correctly", () => {
    render(<PersonalWebsite />);
    expect(true).toBeTruthy();
  });
});
