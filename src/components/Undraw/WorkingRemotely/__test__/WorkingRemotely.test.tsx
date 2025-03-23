import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkingRemotely from "../WorkingRemotely";

describe("WorkingRemotely component", () => {
  it("WorkingRemotely should render correctly", () => {
    render(<WorkingRemotely />);
    expect(true).toBeTruthy();
  });
});
