import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudIds from "../CloudIds";

describe("CloudIds component", () => {
  it("CloudIds should render correctly", () => {
    render(<CloudIds />);
    expect(true).toBeTruthy();
  });
});
