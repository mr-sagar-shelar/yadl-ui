import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElectionDay from "../ElectionDay";

describe("ElectionDay component", () => {
  it("ElectionDay should render correctly", () => {
    render(<ElectionDay />);
    expect(true).toBeTruthy();
  });
});
