import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RDS from "../RDS";

describe("RDS component", () => {
  it("RDS should render correctly", () => {
    render(<RDS />);
    expect(true).toBeTruthy();
  });
});
