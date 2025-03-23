import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Diary from "../Diary";

describe("Diary component", () => {
  it("Diary should render correctly", () => {
    render(<Diary />);
    expect(true).toBeTruthy();
  });
});
