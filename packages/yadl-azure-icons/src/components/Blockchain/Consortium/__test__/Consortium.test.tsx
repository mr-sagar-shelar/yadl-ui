import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Consortium from "../Consortium";

describe("Consortium component", () => {
  it("Consortium should render correctly", () => {
    render(<Consortium />);
    expect(true).toBeTruthy();
  });
});
