import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddDocument from "../AddDocument";

describe("AddDocument component", () => {
  it("AddDocument should render correctly", () => {
    render(<AddDocument />);
    expect(true).toBeTruthy();
  });
});
