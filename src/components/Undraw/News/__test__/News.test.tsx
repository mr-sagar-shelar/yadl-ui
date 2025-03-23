import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import News from "../News";

describe("News component", () => {
  it("News should render correctly", () => {
    render(<News />);
    expect(true).toBeTruthy();
  });
});
