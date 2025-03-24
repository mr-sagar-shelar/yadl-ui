import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Media from "../Media";

describe("Media component", () => {
  it("Media should render correctly", () => {
    render(<Media />);
    expect(true).toBeTruthy();
  });
});
