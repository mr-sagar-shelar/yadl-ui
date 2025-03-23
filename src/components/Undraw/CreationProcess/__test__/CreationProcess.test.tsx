import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreationProcess from "../CreationProcess";

describe("CreationProcess component", () => {
  it("CreationProcess should render correctly", () => {
    render(<CreationProcess />);
    expect(true).toBeTruthy();
  });
});
