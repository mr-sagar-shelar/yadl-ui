import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Nature from "../Nature";

describe("Nature component", () => {
  it("Nature should render correctly", () => {
    render(<Nature />);
    expect(true).toBeTruthy();
  });
});
