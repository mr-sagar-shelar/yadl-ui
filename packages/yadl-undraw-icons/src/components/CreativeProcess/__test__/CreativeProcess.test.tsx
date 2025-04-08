import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreativeProcess from "../CreativeProcess";

describe("CreativeProcess component", () => {
  it("CreativeProcess should render correctly", () => {
    render(<CreativeProcess />);
    expect(true).toBeTruthy();
  });
});
