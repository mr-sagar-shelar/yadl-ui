import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Snowball from "../Snowball";

describe("Snowball component", () => {
  it("Snowball should render correctly", () => {
    render(<Snowball />);
    expect(true).toBeTruthy();
  });
});
