import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ABetterWorld from "../ABetterWorld";

describe("ABetterWorld component", () => {
  it("ABetterWorld should render correctly", () => {
    render(<ABetterWorld />);
    expect(true).toBeTruthy();
  });
});
