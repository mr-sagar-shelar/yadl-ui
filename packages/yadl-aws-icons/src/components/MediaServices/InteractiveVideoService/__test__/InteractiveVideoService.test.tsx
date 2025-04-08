import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InteractiveVideoService from "../InteractiveVideoService";

describe("InteractiveVideoService component", () => {
  it("InteractiveVideoService should render correctly", () => {
    render(<InteractiveVideoService />);
    expect(true).toBeTruthy();
  });
});
