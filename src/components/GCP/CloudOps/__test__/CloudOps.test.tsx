import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudOps from "../CloudOps";

describe("CloudOps component", () => {
  it("CloudOps should render correctly", () => {
    render(<CloudOps />);
    expect(true).toBeTruthy();
  });
});
