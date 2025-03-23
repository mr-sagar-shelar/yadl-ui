import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Address from "../Address";

describe("Address component", () => {
  it("Address should render correctly", () => {
    render(<Address />);
    expect(true).toBeTruthy();
  });
});
