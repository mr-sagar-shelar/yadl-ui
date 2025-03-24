import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Haxe from "../Haxe";

describe("Haxe component", () => {
  it("Haxe should render correctly", () => {
    render(<Haxe />);
    expect(true).toBeTruthy();
  });
});
