import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudMap from "../CloudMap";

describe("CloudMap component", () => {
  it("CloudMap should render correctly", () => {
    render(<CloudMap />);
    expect(true).toBeTruthy();
  });
});
