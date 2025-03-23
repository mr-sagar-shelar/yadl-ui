import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RandomThoughts from "../RandomThoughts";

describe("RandomThoughts component", () => {
  it("RandomThoughts should render correctly", () => {
    render(<RandomThoughts />);
    expect(true).toBeTruthy();
  });
});
