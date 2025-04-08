import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CMake from "../CMake";

describe("CMake component", () => {
  it("CMake should render correctly", () => {
    render(<CMake />);
    expect(true).toBeTruthy();
  });
});
