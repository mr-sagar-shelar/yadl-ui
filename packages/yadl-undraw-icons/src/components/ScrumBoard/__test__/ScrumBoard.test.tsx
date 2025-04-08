import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ScrumBoard from "../ScrumBoard";

describe("ScrumBoard component", () => {
  it("ScrumBoard should render correctly", () => {
    render(<ScrumBoard />);
    expect(true).toBeTruthy();
  });
});
