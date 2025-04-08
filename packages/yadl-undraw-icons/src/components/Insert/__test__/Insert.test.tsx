import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Insert from "../Insert";

describe("Insert component", () => {
  it("Insert should render correctly", () => {
    render(<Insert />);
    expect(true).toBeTruthy();
  });
});
