import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ruby from "../Ruby";

describe("Ruby component", () => {
  it("Ruby should render correctly", () => {
    render(<Ruby />);
    expect(true).toBeTruthy();
  });
});
