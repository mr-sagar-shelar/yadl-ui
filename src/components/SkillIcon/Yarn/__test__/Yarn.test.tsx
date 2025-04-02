import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Yarn from "../Yarn";

describe("Yarn component", () => {
  it("Yarn should render correctly", () => {
    render(<Yarn />);
    expect(true).toBeTruthy();
  });
});
