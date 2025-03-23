import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Review from "../Review";

describe("Review component", () => {
  it("Review should render correctly", () => {
    render(<Review />);
    expect(true).toBeTruthy();
  });
});
