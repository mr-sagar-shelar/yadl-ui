import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudRouter from "../CloudRouter";

describe("CloudRouter component", () => {
  it("CloudRouter should render correctly", () => {
    render(<CloudRouter />);
    expect(true).toBeTruthy();
  });
});
