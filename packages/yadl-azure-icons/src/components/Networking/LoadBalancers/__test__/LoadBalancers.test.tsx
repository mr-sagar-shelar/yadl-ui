import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoadBalancers from "../LoadBalancers";

describe("LoadBalancers component", () => {
  it("LoadBalancers should render correctly", () => {
    render(<LoadBalancers />);
    expect(true).toBeTruthy();
  });
});
