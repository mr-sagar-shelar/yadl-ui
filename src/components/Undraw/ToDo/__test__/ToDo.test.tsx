import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ToDo from "../ToDo";

describe("ToDo component", () => {
  it("ToDo should render correctly", () => {
    render(<ToDo />);
    expect(true).toBeTruthy();
  });
});
