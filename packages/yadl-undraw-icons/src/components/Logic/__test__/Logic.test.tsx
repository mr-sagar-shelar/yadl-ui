import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Logic from "../Logic";

describe("Logic component", () => {
  it("Logic should render correctly", () => {
    render(<Logic />);
    expect(true).toBeTruthy();
  });
});
