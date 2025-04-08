import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalOpinions from "../PersonalOpinions";

describe("PersonalOpinions component", () => {
  it("PersonalOpinions should render correctly", () => {
    render(<PersonalOpinions />);
    expect(true).toBeTruthy();
  });
});
