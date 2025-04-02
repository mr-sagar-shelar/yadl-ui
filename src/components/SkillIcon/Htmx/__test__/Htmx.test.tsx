import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Htmx from "../Htmx";

describe("Htmx component", () => {
  it("Htmx should render correctly", () => {
    render(<Htmx />);
    expect(true).toBeTruthy();
  });
});
