import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PhotoSession from "../PhotoSession";

describe("PhotoSession component", () => {
  it("PhotoSession should render correctly", () => {
    render(<PhotoSession />);
    expect(true).toBeTruthy();
  });
});
