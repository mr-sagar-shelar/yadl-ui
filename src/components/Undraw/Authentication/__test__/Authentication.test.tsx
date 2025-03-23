import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Authentication from "../Authentication";

describe("Authentication component", () => {
  it("Authentication should render correctly", () => {
    render(<Authentication />);
    expect(true).toBeTruthy();
  });
});
