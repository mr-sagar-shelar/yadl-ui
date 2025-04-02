import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BitBucket from "../BitBucket";

describe("BitBucket component", () => {
  it("BitBucket should render correctly", () => {
    render(<BitBucket />);
    expect(true).toBeTruthy();
  });
});
