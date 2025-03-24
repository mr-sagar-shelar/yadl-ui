import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fargate from "../Fargate";

describe("Fargate component", () => {
  it("Fargate should render correctly", () => {
    render(<Fargate />);
    expect(true).toBeTruthy();
  });
});
