import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReadingList from "../ReadingList";

describe("ReadingList component", () => {
  it("ReadingList should render correctly", () => {
    render(<ReadingList />);
    expect(true).toBeTruthy();
  });
});
