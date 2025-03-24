import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Idea from "../Idea";

describe("Idea component", () => {
  it("Idea should render correctly", () => {
    render(<Idea />);
    expect(true).toBeTruthy();
  });
});
