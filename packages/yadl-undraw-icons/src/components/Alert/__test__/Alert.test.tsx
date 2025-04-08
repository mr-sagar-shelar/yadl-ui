import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Alert from "../Alert";

describe("Alert component", () => {
  it("Alert should render correctly", () => {
    render(<Alert />);
    expect(true).toBeTruthy();
  });
});
