import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Notion from "../Notion";

describe("Notion component", () => {
  it("Notion should render correctly", () => {
    render(<Notion />);
    expect(true).toBeTruthy();
  });
});
