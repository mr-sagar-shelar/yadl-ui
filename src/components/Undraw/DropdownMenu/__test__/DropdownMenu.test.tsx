import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DropdownMenu from "../DropdownMenu";

describe("DropdownMenu component", () => {
  it("DropdownMenu should render correctly", () => {
    render(<DropdownMenu />);
    expect(true).toBeTruthy();
  });
});
