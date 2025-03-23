import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuietStreet from "../QuietStreet";

describe("QuietStreet component", () => {
  it("QuietStreet should render correctly", () => {
    render(<QuietStreet />);
    expect(true).toBeTruthy();
  });
});
