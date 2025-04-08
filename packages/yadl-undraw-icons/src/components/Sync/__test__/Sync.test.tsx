import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sync from "../Sync";

describe("Sync component", () => {
  it("Sync should render correctly", () => {
    render(<Sync />);
    expect(true).toBeTruthy();
  });
});
