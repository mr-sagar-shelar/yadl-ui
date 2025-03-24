import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConnectedCache from "../ConnectedCache";

describe("ConnectedCache component", () => {
  it("ConnectedCache should render correctly", () => {
    render(<ConnectedCache />);
    expect(true).toBeTruthy();
  });
});
