import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkChat from "../WorkChat";

describe("WorkChat component", () => {
  it("WorkChat should render correctly", () => {
    render(<WorkChat />);
    expect(true).toBeTruthy();
  });
});
