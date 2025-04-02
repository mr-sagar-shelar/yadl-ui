import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenShift from "../OpenShift";

describe("OpenShift component", () => {
  it("OpenShift should render correctly", () => {
    render(<OpenShift />);
    expect(true).toBeTruthy();
  });
});
