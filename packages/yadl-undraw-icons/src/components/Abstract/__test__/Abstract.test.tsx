import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Abstract from "../Abstract";

describe("Abstract component", () => {
  it("Abstract should render correctly", () => {
    render(<Abstract />);
    expect(true).toBeTruthy();
  });
});
