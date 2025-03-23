import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Details from "../Details";

describe("Details component", () => {
  it("Details should render correctly", () => {
    render(<Details />);
    expect(true).toBeTruthy();
  });
});
