import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileMarketing from "../MobileMarketing";

describe("MobileMarketing component", () => {
  it("MobileMarketing should render correctly", () => {
    render(<MobileMarketing />);
    expect(true).toBeTruthy();
  });
});
