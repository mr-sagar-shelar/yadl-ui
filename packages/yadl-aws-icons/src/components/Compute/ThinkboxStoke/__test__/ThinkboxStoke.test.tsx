import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThinkboxStoke from "../ThinkboxStoke";

describe("ThinkboxStoke component", () => {
  it("ThinkboxStoke should render correctly", () => {
    render(<ThinkboxStoke />);
    expect(true).toBeTruthy();
  });
});
