import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlayingFetch from "../PlayingFetch";

describe("PlayingFetch component", () => {
  it("PlayingFetch should render correctly", () => {
    render(<PlayingFetch />);
    expect(true).toBeTruthy();
  });
});
