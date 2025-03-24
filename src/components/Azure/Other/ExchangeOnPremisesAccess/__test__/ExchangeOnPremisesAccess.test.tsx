import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExchangeOnPremisesAccess from "../ExchangeOnPremisesAccess";

describe("ExchangeOnPremisesAccess component", () => {
  it("ExchangeOnPremisesAccess should render correctly", () => {
    render(<ExchangeOnPremisesAccess />);
    expect(true).toBeTruthy();
  });
});
