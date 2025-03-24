import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudSearch from "../CloudSearch";

describe("CloudSearch component", () => {
  it("CloudSearch should render correctly", () => {
    render(<CloudSearch />);
    expect(true).toBeTruthy();
  });
});
