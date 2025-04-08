import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SQLManagedInstance from "../SQLManagedInstance";

describe("SQLManagedInstance component", () => {
  it("SQLManagedInstance should render correctly", () => {
    render(<SQLManagedInstance />);
    expect(true).toBeTruthy();
  });
});
