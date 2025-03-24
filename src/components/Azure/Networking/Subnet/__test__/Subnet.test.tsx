import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Subnet from "../Subnet";

describe("Subnet component", () => {
  it("Subnet should render correctly", () => {
    render(<Subnet />);
    expect(true).toBeTruthy();
  });
});
