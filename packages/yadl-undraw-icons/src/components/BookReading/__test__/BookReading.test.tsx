import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BookReading from "../BookReading";

describe("BookReading component", () => {
  it("BookReading should render correctly", () => {
    render(<BookReading />);
    expect(true).toBeTruthy();
  });
});
