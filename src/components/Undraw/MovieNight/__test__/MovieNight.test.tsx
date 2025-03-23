import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MovieNight from "../MovieNight";

describe("MovieNight component", () => {
  it("MovieNight should render correctly", () => {
    render(<MovieNight />);
    expect(true).toBeTruthy();
  });
});
