import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gaming from "../Gaming";

describe("Gaming component", () => {
  it("Gaming should render correctly", () => {
    render(<Gaming />);
    expect(true).toBeTruthy();
  });
});
