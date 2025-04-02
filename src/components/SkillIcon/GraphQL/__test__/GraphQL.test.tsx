import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GraphQL from "../GraphQL";

describe("GraphQL component", () => {
  it("GraphQL should render correctly", () => {
    render(<GraphQL />);
    expect(true).toBeTruthy();
  });
});
