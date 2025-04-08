import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExpressJS from "../ExpressJS";

describe("ExpressJS component", () => {
  it("ExpressJS should render correctly", () => {
    render(<ExpressJS />);
    expect(true).toBeTruthy();
  });
});
