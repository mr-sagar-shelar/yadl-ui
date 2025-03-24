import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Azure from "../Azure";

describe("Azure component", () => {
  it("Azure should render correctly", () => {
    render(<Azure />);
    expect(true).toBeTruthy();
  });
});
