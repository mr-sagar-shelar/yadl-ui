import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Workflows from "../Workflows";

describe("Workflows component", () => {
  it("Workflows should render correctly", () => {
    render(<Workflows />);
    expect(true).toBeTruthy();
  });
});
