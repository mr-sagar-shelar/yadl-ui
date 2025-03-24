import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThinkboxKrakatoa from "../ThinkboxKrakatoa";

describe("ThinkboxKrakatoa component", () => {
  it("ThinkboxKrakatoa should render correctly", () => {
    render(<ThinkboxKrakatoa />);
    expect(true).toBeTruthy();
  });
});
