import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResumeFolder from "../ResumeFolder";

describe("ResumeFolder component", () => {
  it("ResumeFolder should render correctly", () => {
    render(<ResumeFolder />);
    expect(true).toBeTruthy();
  });
});
