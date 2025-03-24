import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Security from "../Security";

describe("Security component", () => {
  it("Security should render correctly", () => {
    render(<Security />);
    expect(true).toBeTruthy();
  });
});
