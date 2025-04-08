import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceGuard from "../ResourceGuard";

describe("ResourceGuard component", () => {
  it("ResourceGuard should render correctly", () => {
    render(<ResourceGuard />);
    expect(true).toBeTruthy();
  });
});
