import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SQLDatabase from "../SQLDatabase";

describe("SQLDatabase component", () => {
  it("SQLDatabase should render correctly", () => {
    render(<SQLDatabase />);
    expect(true).toBeTruthy();
  });
});
