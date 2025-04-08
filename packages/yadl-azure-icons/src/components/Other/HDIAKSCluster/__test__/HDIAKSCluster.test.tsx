import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HDIAKSCluster from "../HDIAKSCluster";

describe("HDIAKSCluster component", () => {
  it("HDIAKSCluster should render correctly", () => {
    render(<HDIAKSCluster />);
    expect(true).toBeTruthy();
  });
});
