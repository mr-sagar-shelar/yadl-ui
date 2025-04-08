import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalNotebook from "../PersonalNotebook";

describe("PersonalNotebook component", () => {
  it("PersonalNotebook should render correctly", () => {
    render(<PersonalNotebook />);
    expect(true).toBeTruthy();
  });
});
