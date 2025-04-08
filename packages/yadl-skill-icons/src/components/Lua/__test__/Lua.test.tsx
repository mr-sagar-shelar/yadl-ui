import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Lua from "../Lua";

describe("Lua component", () => {
  it("Lua should render correctly", () => {
    render(<Lua />);
    expect(true).toBeTruthy();
  });
});
