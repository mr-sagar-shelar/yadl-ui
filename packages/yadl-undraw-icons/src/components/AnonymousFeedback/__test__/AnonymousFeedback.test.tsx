import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AnonymousFeedback from "../AnonymousFeedback";

describe("AnonymousFeedback component", () => {
  it("AnonymousFeedback should render correctly", () => {
    render(<AnonymousFeedback />);
    expect(true).toBeTruthy();
  });
});
