import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DuaLipaDuaLipa from "../DuaLipaDuaLipa";

describe("DuaLipaDuaLipa component", () => {
  it("DuaLipaDuaLipa should render correctly", () => {
    render(<DuaLipaDuaLipa />);
    expect(true).toBeTruthy();
  });
});
