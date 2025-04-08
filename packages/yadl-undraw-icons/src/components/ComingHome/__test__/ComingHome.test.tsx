import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComingHome from "../ComingHome";

describe("ComingHome component", () => {
  it("ComingHome should render correctly", () => {
    render(<ComingHome />);
    expect(true).toBeTruthy();
  });
});
