import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Basketball from "../Basketball";

describe("Basketball component", () => {
  it("Basketball should render correctly", () => {
    render(<Basketball />);
    expect(true).toBeTruthy();
  });
});
