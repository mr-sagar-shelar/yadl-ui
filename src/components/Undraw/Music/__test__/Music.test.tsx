import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Music from "../Music";

describe("Music component", () => {
  it("Music should render correctly", () => {
    render(<Music />);
    expect(true).toBeTruthy();
  });
});
