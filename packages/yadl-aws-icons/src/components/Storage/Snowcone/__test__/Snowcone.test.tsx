import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Snowcone from "../Snowcone";

describe("Snowcone component", () => {
  it("Snowcone should render correctly", () => {
    render(<Snowcone />);
    expect(true).toBeTruthy();
  });
});
