import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Debian from "../Debian";

describe("Debian component", () => {
  it("Debian should render correctly", () => {
    render(<Debian />);
    expect(true).toBeTruthy();
  });
});
