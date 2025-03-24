import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkerContainerApp from "../WorkerContainerApp";

describe("WorkerContainerApp component", () => {
  it("WorkerContainerApp should render correctly", () => {
    render(<WorkerContainerApp />);
    expect(true).toBeTruthy();
  });
});
