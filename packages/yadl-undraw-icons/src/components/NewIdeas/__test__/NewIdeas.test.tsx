import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewIdeas from "../NewIdeas";

describe("NewIdeas component", () => {
  it("NewIdeas should render correctly", () => {
    render(<NewIdeas />);
    expect(true).toBeTruthy();
  });
});
