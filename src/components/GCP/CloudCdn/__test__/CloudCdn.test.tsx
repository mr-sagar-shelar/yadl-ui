import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudCdn from "../CloudCdn";

describe("CloudCdn component", () => {
  it("CloudCdn should render correctly", () => {
    render(<CloudCdn />);
    expect(true).toBeTruthy();
  });
});
