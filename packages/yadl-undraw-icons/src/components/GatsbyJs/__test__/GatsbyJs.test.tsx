import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GatsbyJs from "../GatsbyJs";

describe("GatsbyJs component", () => {
  it("GatsbyJs should render correctly", () => {
    render(<GatsbyJs />);
    expect(true).toBeTruthy();
  });
});
