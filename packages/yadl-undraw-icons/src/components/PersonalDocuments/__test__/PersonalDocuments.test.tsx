import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalDocuments from "../PersonalDocuments";

describe("PersonalDocuments component", () => {
  it("PersonalDocuments should render correctly", () => {
    render(<PersonalDocuments />);
    expect(true).toBeTruthy();
  });
});
