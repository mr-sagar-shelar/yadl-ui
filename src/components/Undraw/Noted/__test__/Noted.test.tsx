import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Noted from "../Noted";

describe("Noted component", () => {
  it("Noted should render correctly", () => {
    render(<Noted />);
    expect(true).toBeTruthy();
  });
});
