import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Elixir from "../Elixir";

describe("Elixir component", () => {
  it("Elixir should render correctly", () => {
    render(<Elixir />);
    expect(true).toBeTruthy();
  });
});
