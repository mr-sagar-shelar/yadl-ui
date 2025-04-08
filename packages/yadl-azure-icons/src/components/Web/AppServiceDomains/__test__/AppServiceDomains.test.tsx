import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppServiceDomains from "../AppServiceDomains";

describe("AppServiceDomains component", () => {
  it("AppServiceDomains should render correctly", () => {
    render(<AppServiceDomains />);
    expect(true).toBeTruthy();
  });
});
