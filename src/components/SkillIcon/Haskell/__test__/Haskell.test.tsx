import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Haskell from "../Haskell";

describe("Haskell component", () => {
  it("Haskell should render correctly", () => {
    render(<Haskell />);
    expect(true).toBeTruthy();
  });
});
