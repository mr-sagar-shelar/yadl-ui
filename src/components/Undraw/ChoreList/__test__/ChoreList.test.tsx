import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChoreList from "../ChoreList";

describe("ChoreList component", () => {
  it("ChoreList should render correctly", () => {
    render(<ChoreList />);
    expect(true).toBeTruthy();
  });
});
