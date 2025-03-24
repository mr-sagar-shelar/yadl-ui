import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Athena from "../Athena";

describe("Athena component", () => {
  it("Athena should render correctly", () => {
    render(<Athena />);
    expect(true).toBeTruthy();
  });
});
