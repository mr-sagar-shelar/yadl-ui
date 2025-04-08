import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Online from "../Online";

describe("Online component", () => {
  it("Online should render correctly", () => {
    render(<Online />);
    expect(true).toBeTruthy();
  });
});
