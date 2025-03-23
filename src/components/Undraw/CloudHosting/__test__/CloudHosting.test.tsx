import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudHosting from "../CloudHosting";

describe("CloudHosting component", () => {
  it("CloudHosting should render correctly", () => {
    render(<CloudHosting />);
    expect(true).toBeTruthy();
  });
});
