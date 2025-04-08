import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Knowledge from "../Knowledge";

describe("Knowledge component", () => {
  it("Knowledge should render correctly", () => {
    render(<Knowledge />);
    expect(true).toBeTruthy();
  });
});
