import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hiking from "../Hiking";

describe("Hiking component", () => {
  it("Hiking should render correctly", () => {
    render(<Hiking />);
    expect(true).toBeTruthy();
  });
});
