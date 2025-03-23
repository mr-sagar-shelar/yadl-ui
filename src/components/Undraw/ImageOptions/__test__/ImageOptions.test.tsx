import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageOptions from "../ImageOptions";

describe("ImageOptions component", () => {
  it("ImageOptions should render correctly", () => {
    render(<ImageOptions />);
    expect(true).toBeTruthy();
  });
});
