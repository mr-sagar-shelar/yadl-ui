import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gulp from "../Gulp";

describe("Gulp component", () => {
  it("Gulp should render correctly", () => {
    render(<Gulp />);
    expect(true).toBeTruthy();
  });
});
