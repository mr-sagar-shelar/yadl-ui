import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Api from "../Api";

describe("Api component", () => {
  it("Api should render correctly", () => {
    render(<Api />);
    expect(true).toBeTruthy();
  });
});
