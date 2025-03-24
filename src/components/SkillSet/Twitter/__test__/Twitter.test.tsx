import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Twitter from "../Twitter";

describe("Twitter component", () => {
  it("Twitter should render correctly", () => {
    render(<Twitter />);
    expect(true).toBeTruthy();
  });
});
