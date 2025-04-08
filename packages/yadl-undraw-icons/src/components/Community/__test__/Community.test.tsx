import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Community from "../Community";

describe("Community component", () => {
  it("Community should render correctly", () => {
    render(<Community />);
    expect(true).toBeTruthy();
  });
});
