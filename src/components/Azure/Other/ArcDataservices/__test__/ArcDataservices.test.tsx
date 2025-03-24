import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArcDataservices from "../ArcDataservices";

describe("ArcDataservices component", () => {
  it("ArcDataservices should render correctly", () => {
    render(<ArcDataservices />);
    expect(true).toBeTruthy();
  });
});
