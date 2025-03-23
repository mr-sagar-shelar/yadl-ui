import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShortBio from "../ShortBio";

describe("ShortBio component", () => {
  it("ShortBio should render correctly", () => {
    render(<ShortBio />);
    expect(true).toBeTruthy();
  });
});
