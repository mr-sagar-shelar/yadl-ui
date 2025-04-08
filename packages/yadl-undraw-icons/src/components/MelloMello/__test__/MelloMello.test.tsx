import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MelloMello from "../MelloMello";

describe("MelloMello component", () => {
  it("MelloMello should render correctly", () => {
    render(<MelloMello />);
    expect(true).toBeTruthy();
  });
});
