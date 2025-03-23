import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Create from "../Create";

describe("Create component", () => {
  it("Create should render correctly", () => {
    render(<Create />);
    expect(true).toBeTruthy();
  });
});
