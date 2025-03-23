import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AccessDenied from "../AccessDenied";

describe("AccessDenied component", () => {
  it("AccessDenied should render correctly", () => {
    render(<AccessDenied />);
    expect(true).toBeTruthy();
  });
});
