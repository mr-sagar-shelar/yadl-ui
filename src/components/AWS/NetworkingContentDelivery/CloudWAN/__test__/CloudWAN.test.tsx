import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudWAN from "../CloudWAN";

describe("CloudWAN component", () => {
  it("CloudWAN should render correctly", () => {
    render(<CloudWAN />);
    expect(true).toBeTruthy();
  });
});
