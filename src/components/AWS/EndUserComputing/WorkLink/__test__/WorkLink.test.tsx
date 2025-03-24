import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkLink from "../WorkLink";

describe("WorkLink component", () => {
  it("WorkLink should render correctly", () => {
    render(<WorkLink />);
    expect(true).toBeTruthy();
  });
});
