import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessMan from "../Businessman";

describe("Businessman component", () => {
  it("Businessman should render correctly", () => {
    render(<BusinessMan />);
    expect(true).toBeTruthy();
  });
});
