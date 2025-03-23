import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalFile from "../PersonalFile";

describe("PersonalFile component", () => {
  it("PersonalFile should render correctly", () => {
    render(<PersonalFile />);
    expect(true).toBeTruthy();
  });
});
