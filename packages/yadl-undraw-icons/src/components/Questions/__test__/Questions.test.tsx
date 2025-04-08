import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Questions from "../Questions";

describe("Questions component", () => {
  it("Questions should render correctly", () => {
    render(<Questions />);
    expect(true).toBeTruthy();
  });
});
