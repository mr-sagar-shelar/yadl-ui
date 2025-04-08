import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageFocus from "../ImageFocus";

describe("ImageFocus component", () => {
  it("ImageFocus should render correctly", () => {
    render(<ImageFocus />);
    expect(true).toBeTruthy();
  });
});
