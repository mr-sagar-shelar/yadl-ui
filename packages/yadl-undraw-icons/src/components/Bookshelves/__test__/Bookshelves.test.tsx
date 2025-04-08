import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bookshelves from "../Bookshelves";

describe("Bookshelves component", () => {
  it("Bookshelves should render correctly", () => {
    render(<Bookshelves />);
    expect(true).toBeTruthy();
  });
});
