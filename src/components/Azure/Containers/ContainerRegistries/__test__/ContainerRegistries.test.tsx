import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContainerRegistries from "../ContainerRegistries";

describe("ContainerRegistries component", () => {
  it("ContainerRegistries should render correctly", () => {
    render(<ContainerRegistries />);
    expect(true).toBeTruthy();
  });
});
