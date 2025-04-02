import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Workers from "../Workers";

describe("Workers component", () => {
  it("Workers should render correctly", () => {
    render(<Workers />);
    expect(true).toBeTruthy();
  });
});
