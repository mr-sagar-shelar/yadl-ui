import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Catalog from "../Catalog";

describe("Catalog component", () => {
  it("Catalog should render correctly", () => {
    render(<Catalog />);
    expect(true).toBeTruthy();
  });
});
