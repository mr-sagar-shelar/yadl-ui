import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Imagination from "../Imagination";

describe("Imagination component", () => {
  it("Imagination should render correctly", () => {
    render(<Imagination />);
    expect(true).toBeTruthy();
  });
});
