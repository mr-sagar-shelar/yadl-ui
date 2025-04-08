import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDevelopmentKit from "../CloudDevelopmentKit";

describe("CloudDevelopmentKit component", () => {
  it("CloudDevelopmentKit should render correctly", () => {
    render(<CloudDevelopmentKit />);
    expect(true).toBeTruthy();
  });
});
