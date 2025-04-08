import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Backlog from "../Backlog";

describe("Backlog component", () => {
  it("Backlog should render correctly", () => {
    render(<Backlog />);
    expect(true).toBeTruthy();
  });
});
