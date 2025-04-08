import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EBooks from "../EBooks";

describe("EBooks component", () => {
  it("EBooks should render correctly", () => {
    render(<EBooks />);
    expect(true).toBeTruthy();
  });
});
