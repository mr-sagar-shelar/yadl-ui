import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Education from "../Education";

describe("Education component", () => {
  it("Education should render correctly", () => {
    render(<Education />);
    expect(true).toBeTruthy();
  });
});
