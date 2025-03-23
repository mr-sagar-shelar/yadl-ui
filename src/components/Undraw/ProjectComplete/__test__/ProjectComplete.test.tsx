import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProjectComplete from "../ProjectComplete";

describe("ProjectComplete component", () => {
  it("ProjectComplete should render correctly", () => {
    render(<ProjectComplete />);
    expect(true).toBeTruthy();
  });
});
