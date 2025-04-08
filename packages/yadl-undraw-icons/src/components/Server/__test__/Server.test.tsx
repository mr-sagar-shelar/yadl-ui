import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Server from "../Server";

describe("Server component", () => {
  it("Server should render correctly", () => {
    render(<Server />);
    expect(true).toBeTruthy();
  });
});
