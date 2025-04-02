import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Crystal from "../Crystal";

describe("Crystal component", () => {
  it("Crystal should render correctly", () => {
    render(<Crystal />);
    expect(true).toBeTruthy();
  });
});
