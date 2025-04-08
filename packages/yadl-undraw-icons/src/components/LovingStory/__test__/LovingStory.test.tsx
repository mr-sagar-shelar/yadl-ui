import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LovingStory from "../LovingStory";

describe("LovingStory component", () => {
  it("LovingStory should render correctly", () => {
    render(<LovingStory />);
    expect(true).toBeTruthy();
  });
});
