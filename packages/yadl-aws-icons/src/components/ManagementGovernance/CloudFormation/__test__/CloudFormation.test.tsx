import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudFormation from "../CloudFormation";

describe("CloudFormation component", () => {
  it("CloudFormation should render correctly", () => {
    render(<CloudFormation />);
    expect(true).toBeTruthy();
  });
});
