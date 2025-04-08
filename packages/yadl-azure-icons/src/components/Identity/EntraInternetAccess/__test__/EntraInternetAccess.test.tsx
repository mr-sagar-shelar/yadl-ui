import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraInternetAccess from "../EntraInternetAccess";

describe("EntraInternetAccess component", () => {
  it("EntraInternetAccess should render correctly", () => {
    render(<EntraInternetAccess />);
    expect(true).toBeTruthy();
  });
});
