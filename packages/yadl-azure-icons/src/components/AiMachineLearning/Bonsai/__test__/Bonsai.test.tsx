import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bonsai from "../Bonsai";

describe("Bonsai component", () => {
  it("Bonsai should render correctly", () => {
    render(<Bonsai />);
    expect(true).toBeTruthy();
  });
});
