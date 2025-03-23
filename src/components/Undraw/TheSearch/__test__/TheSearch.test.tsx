import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TheSearch from "../TheSearch";

describe("TheSearch component", () => {
  it("TheSearch should render correctly", () => {
    render(<TheSearch />);
    expect(true).toBeTruthy();
  });
});
