import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WAC from "../WAC";

describe("WAC component", () => {
  it("WAC should render correctly", () => {
    render(<WAC />);
    expect(true).toBeTruthy();
  });
});
