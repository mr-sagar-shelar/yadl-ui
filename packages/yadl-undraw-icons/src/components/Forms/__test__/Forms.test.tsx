import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Forms from "../Forms";

describe("Forms component", () => {
  it("Forms should render correctly", () => {
    render(<Forms />);
    expect(true).toBeTruthy();
  });
});
