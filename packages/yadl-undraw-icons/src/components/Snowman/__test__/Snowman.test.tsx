import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Snowman from "../Snowman";

describe("Snowman component", () => {
  it("Snowman should render correctly", () => {
    render(<Snowman />);
    expect(true).toBeTruthy();
  });
});
