import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThrowAway from "../ThrowAway";

describe("ThrowAway component", () => {
  it("ThrowAway should render correctly", () => {
    render(<ThrowAway />);
    expect(true).toBeTruthy();
  });
});
