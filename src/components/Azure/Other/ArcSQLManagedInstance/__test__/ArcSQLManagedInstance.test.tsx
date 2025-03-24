import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArcSQLManagedInstance from "../ArcSQLManagedInstance";

describe("ArcSQLManagedInstance component", () => {
  it("ArcSQLManagedInstance should render correctly", () => {
    render(<ArcSQLManagedInstance />);
    expect(true).toBeTruthy();
  });
});
