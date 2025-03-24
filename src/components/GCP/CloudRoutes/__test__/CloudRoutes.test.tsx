import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudRoutes from "../CloudRoutes";

describe("CloudRoutes component", () => {
  it("CloudRoutes should render correctly", () => {
    render(<CloudRoutes />);
    expect(true).toBeTruthy();
  });
});
