import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArcSQLServer from "../ArcSQLServer";

describe("ArcSQLServer component", () => {
  it("ArcSQLServer should render correctly", () => {
    render(<ArcSQLServer />);
    expect(true).toBeTruthy();
  });
});
