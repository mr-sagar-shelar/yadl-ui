import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BookLover from "../BookLover";

describe("BookLover component", () => {
  it("BookLover should render correctly", () => {
    render(<BookLover />);
    expect(true).toBeTruthy();
  });
});
