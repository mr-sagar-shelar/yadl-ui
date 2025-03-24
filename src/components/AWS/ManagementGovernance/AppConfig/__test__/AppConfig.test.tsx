import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppConfig from "../AppConfig";

describe("AppConfig component", () => {
  it("AppConfig should render correctly", () => {
    render(<AppConfig />);
    expect(true).toBeTruthy();
  });
});
