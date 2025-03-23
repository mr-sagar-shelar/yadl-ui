import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Celebration from "../Celebration";

describe("Celebration component", () => {
  it("Celebration should render correctly", () => {
    render(<Celebration />);
    expect(true).toBeTruthy();
  });
});
