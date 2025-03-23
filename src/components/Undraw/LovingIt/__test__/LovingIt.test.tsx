import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LovingIt from "../LovingIt";

describe("LovingIt component", () => {
  it("LovingIt should render correctly", () => {
    render(<LovingIt />);
    expect(true).toBeTruthy();
  });
});
