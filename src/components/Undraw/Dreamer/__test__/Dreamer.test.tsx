import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dreamer from "../Dreamer";

describe("Dreamer component", () => {
  it("Dreamer should render correctly", () => {
    render(<Dreamer />);
    expect(true).toBeTruthy();
  });
});
