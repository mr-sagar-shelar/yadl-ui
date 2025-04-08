import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationGroup from "../ApplicationGroup";

describe("ApplicationGroup component", () => {
  it("ApplicationGroup should render correctly", () => {
    render(<ApplicationGroup />);
    expect(true).toBeTruthy();
  });
});
