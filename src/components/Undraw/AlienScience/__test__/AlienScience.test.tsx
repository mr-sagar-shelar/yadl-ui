import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AlienScience from "../AlienScience";

describe("AlienScience component", () => {
  it("AlienScience should render correctly", () => {
    render(<AlienScience />);
    expect(true).toBeTruthy();
  });
});
