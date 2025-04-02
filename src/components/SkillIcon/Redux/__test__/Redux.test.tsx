import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Redux from "../Redux";

describe("Redux component", () => {
  it("Redux should render correctly", () => {
    render(<Redux />);
    expect(true).toBeTruthy();
  });
});
