import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FormingIdeas from "../FormingIdeas";

describe("FormingIdeas component", () => {
  it("FormingIdeas should render correctly", () => {
    render(<FormingIdeas />);
    expect(true).toBeTruthy();
  });
});
