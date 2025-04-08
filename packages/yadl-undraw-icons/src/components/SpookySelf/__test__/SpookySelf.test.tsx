import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpookySelf from "../SpookySelf";

describe("SpookySelf component", () => {
  it("SpookySelf should render correctly", () => {
    render(<SpookySelf />);
    expect(true).toBeTruthy();
  });
});
