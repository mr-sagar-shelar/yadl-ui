import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuietTown from "../QuietTown";

describe("QuietTown component", () => {
  it("QuietTown should render correctly", () => {
    render(<QuietTown />);
    expect(true).toBeTruthy();
  });
});
