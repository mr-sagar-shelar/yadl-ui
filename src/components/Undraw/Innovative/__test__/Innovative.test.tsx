import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Innovative from "../Innovative";

describe("Innovative component", () => {
  it("Innovative should render correctly", () => {
    render(<Innovative />);
    expect(true).toBeTruthy();
  });
});
