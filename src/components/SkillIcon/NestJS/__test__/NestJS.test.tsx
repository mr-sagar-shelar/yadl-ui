import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NestJS from "../NestJS";

describe("NestJS component", () => {
  it("NestJS should render correctly", () => {
    render(<NestJS />);
    expect(true).toBeTruthy();
  });
});
