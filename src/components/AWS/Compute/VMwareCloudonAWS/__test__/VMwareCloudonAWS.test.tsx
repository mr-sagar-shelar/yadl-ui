import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VMwareCloudonAWS from "../VMwareCloudonAWS";

describe("VMwareCloudonAWS component", () => {
  it("VMwareCloudonAWS should render correctly", () => {
    render(<VMwareCloudonAWS />);
    expect(true).toBeTruthy();
  });
});
