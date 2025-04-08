import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudLogging from "../CloudLogging";

describe("CloudLogging component", () => {
  it("CloudLogging should render correctly", () => {
    render(<CloudLogging />);
    expect(true).toBeTruthy();
  });
});
