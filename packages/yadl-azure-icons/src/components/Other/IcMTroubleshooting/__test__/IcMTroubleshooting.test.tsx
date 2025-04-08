import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IcMTroubleshooting from "../IcMTroubleshooting";

describe("IcMTroubleshooting component", () => {
  it("IcMTroubleshooting should render correctly", () => {
    render(<IcMTroubleshooting />);
    expect(true).toBeTruthy();
  });
});
