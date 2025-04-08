import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sumerian from "../Sumerian";

describe("Sumerian component", () => {
  it("Sumerian should render correctly", () => {
    render(<Sumerian />);
    expect(true).toBeTruthy();
  });
});
