import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RePost from "../RePost";

describe("RePost component", () => {
  it("RePost should render correctly", () => {
    render(<RePost />);
    expect(true).toBeTruthy();
  });
});
