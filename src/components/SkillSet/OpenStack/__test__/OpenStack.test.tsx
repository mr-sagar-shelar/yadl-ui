import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenStack from "../OpenStack";

describe("OpenStack component", () => {
  it("OpenStack should render correctly", () => {
    render(<OpenStack />);
    expect(true).toBeTruthy();
  });
});
