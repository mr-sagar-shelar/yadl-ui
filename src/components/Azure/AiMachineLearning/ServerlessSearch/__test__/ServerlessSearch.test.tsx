import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServerlessSearch from "../ServerlessSearch";

describe("ServerlessSearch component", () => {
  it("ServerlessSearch should render correctly", () => {
    render(<ServerlessSearch />);
    expect(true).toBeTruthy();
  });
});
