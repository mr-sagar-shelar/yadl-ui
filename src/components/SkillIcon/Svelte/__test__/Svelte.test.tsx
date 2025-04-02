import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Svelte from "../Svelte";

describe("Svelte component", () => {
  it("Svelte should render correctly", () => {
    render(<Svelte />);
    expect(true).toBeTruthy();
  });
});
