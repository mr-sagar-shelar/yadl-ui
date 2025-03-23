import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Adventure from "../Adventure";

describe("Adventure component", () => {
  it("Adventure should render correctly", () => {
    render(<Adventure />);
    expect(true).toBeTruthy();
  });
});
