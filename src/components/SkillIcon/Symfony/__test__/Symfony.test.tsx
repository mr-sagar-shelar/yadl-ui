import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Symfony from "../Symfony";

describe("Symfony component", () => {
  it("Symfony should render correctly", () => {
    render(<Symfony />);
    expect(true).toBeTruthy();
  });
});
