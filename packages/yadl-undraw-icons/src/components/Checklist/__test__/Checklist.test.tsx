import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Checklist from "../Checklist";

describe("Checklist component", () => {
  it("Checklist should render correctly", () => {
    render(<Checklist />);
    expect(true).toBeTruthy();
  });
});
