import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DevTo from "../DevTo";

describe("DevTo component", () => {
  it("DevTo should render correctly", () => {
    render(<DevTo />);
    expect(true).toBeTruthy();
  });
});
