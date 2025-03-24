import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExchangeAccess from "../ExchangeAccess";

describe("ExchangeAccess component", () => {
  it("ExchangeAccess should render correctly", () => {
    render(<ExchangeAccess />);
    expect(true).toBeTruthy();
  });
});
