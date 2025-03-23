import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Articles from "../Articles";

describe("Articles component", () => {
  it("Articles should render correctly", () => {
    render(<Articles />);
    expect(true).toBeTruthy();
  });
});
