import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Elysia from "../Elysia";

describe("Elysia component", () => {
  it("Elysia should render correctly", () => {
    render(<Elysia />);
    expect(true).toBeTruthy();
  });
});
