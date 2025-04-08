import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppServices from "../AppServices";

describe("AppServices component", () => {
  it("AppServices should render correctly", () => {
    render(<AppServices />);
    expect(true).toBeTruthy();
  });
});
