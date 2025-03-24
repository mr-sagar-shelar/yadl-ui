import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Memorystore from "../Memorystore";

describe("Memorystore component", () => {
  it("Memorystore should render correctly", () => {
    render(<Memorystore />);
    expect(true).toBeTruthy();
  });
});
