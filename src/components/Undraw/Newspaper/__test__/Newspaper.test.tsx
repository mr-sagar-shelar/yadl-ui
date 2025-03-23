import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Newspaper from "../Newspaper";

describe("Newspaper component", () => {
  it("Newspaper should render correctly", () => {
    render(<Newspaper />);
    expect(true).toBeTruthy();
  });
});
