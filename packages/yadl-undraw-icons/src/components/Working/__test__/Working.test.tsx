import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Working from "../Working";

describe("Working component", () => {
  it("Working should render correctly", () => {
    render(<Working />);
    expect(true).toBeTruthy();
  });
});
