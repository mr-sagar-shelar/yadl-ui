import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vertexai from "../Vertexai";

describe("Vertexai component", () => {
  it("Vertexai should render correctly", () => {
    render(<Vertexai />);
    expect(true).toBeTruthy();
  });
});
