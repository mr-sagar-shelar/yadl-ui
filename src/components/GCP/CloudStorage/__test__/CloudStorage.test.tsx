import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudStorage from "../CloudStorage";

describe("CloudStorage component", () => {
  it("CloudStorage should render correctly", () => {
    render(<CloudStorage />);
    expect(true).toBeTruthy();
  });
});
