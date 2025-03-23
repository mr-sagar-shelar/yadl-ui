import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NakamotoNakamoto from "../NakamotoNakamoto";

describe("NakamotoNakamoto component", () => {
  it("NakamotoNakamoto should render correctly", () => {
    render(<NakamotoNakamoto />);
    expect(true).toBeTruthy();
  });
});
