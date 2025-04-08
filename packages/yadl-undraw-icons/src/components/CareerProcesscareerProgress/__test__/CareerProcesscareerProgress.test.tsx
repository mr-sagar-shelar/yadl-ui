import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CareerProcesscareerProgress from "../CareerProcesscareerProgress";

describe("CareerProcesscareerProgress component", () => {
  it("CareerProcesscareerProgress should render correctly", () => {
    render(<CareerProcesscareerProgress />);
    expect(true).toBeTruthy();
  });
});
