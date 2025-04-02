import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DENO from "../DENO";

describe("DENO component", () => {
  it("DENO should render correctly", () => {
    render(<DENO />);
    expect(true).toBeTruthy();
  });
});
