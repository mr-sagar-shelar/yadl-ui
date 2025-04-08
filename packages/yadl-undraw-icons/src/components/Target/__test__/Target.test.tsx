import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Target from "../Target";

describe("Target component", () => {
  it("Target should render correctly", () => {
    render(<Target />);
    expect(true).toBeTruthy();
  });
});
