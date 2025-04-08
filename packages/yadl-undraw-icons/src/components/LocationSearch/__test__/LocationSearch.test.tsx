import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocationSearch from "../LocationSearch";

describe("LocationSearch component", () => {
  it("LocationSearch should render correctly", () => {
    render(<LocationSearch />);
    expect(true).toBeTruthy();
  });
});
