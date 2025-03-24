import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DynamoDB from "../DynamoDB";

describe("DynamoDB component", () => {
  it("DynamoDB should render correctly", () => {
    render(<DynamoDB />);
    expect(true).toBeTruthy();
  });
});
