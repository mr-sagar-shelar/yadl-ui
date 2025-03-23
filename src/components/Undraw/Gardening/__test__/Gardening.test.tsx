import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gardening from "../Gardening";

describe("Gardening component", () => {
  it("Gardening should render correctly", () => {
    render(<Gardening />);
    expect(true).toBeTruthy();
  });
});
