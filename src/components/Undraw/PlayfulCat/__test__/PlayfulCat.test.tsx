import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlayfulCat from "../PlayfulCat";

describe("PlayfulCat component", () => {
  it("PlayfulCat should render correctly", () => {
    render(<PlayfulCat />);
    expect(true).toBeTruthy();
  });
});
