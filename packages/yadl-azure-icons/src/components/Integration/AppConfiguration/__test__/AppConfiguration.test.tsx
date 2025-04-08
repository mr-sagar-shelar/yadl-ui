import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppConfiguration from "../AppConfiguration";

describe("AppConfiguration component", () => {
  it("AppConfiguration should render correctly", () => {
    render(<AppConfiguration />);
    expect(true).toBeTruthy();
  });
});
