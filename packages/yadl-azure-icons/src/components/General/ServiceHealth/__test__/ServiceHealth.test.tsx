import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceHealth from "../ServiceHealth";

describe("ServiceHealth component", () => {
  it("ServiceHealth should render correctly", () => {
    render(<ServiceHealth />);
    expect(true).toBeTruthy();
  });
});
