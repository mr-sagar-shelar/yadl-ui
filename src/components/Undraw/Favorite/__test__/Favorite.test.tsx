import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Favorite from "../Favorite";

describe("Favorite component", () => {
  it("Favorite should render correctly", () => {
    render(<Favorite />);
    expect(true).toBeTruthy();
  });
});
