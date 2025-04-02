import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Github from "../Github";

describe("Github component", () => {
  it("Github should render correctly", () => {
    render(<Github />);
    expect(true).toBeTruthy();
  });
});
