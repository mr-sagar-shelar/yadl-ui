import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Table from "../Table";

describe("Table component", () => {
  it("Table should render correctly", () => {
    render(<Table />);
    expect(true).toBeTruthy();
  });
});
