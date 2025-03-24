import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FastAPI from "../FastAPI";

describe("FastAPI component", () => {
  it("FastAPI should render correctly", () => {
    render(<FastAPI />);
    expect(true).toBeTruthy();
  });
});
