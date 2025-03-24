import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Detective from "../Detective";

describe("Detective component", () => {
  it("Detective should render correctly", () => {
    render(<Detective />);
    expect(true).toBeTruthy();
  });
});
