import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Studying from "../Studying";

describe("Studying component", () => {
  it("Studying should render correctly", () => {
    render(<Studying />);
    expect(true).toBeTruthy();
  });
});
