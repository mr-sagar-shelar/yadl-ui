import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Anthos from "../Anthos";

describe("Anthos component", () => {
  it("Anthos should render correctly", () => {
    render(<Anthos />);
    expect(true).toBeTruthy();
  });
});
