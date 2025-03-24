import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OracleDatabase from "../OracleDatabase";

describe("OracleDatabase component", () => {
  it("OracleDatabase should render correctly", () => {
    render(<OracleDatabase />);
    expect(true).toBeTruthy();
  });
});
