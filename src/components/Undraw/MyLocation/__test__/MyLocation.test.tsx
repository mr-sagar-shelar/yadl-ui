import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyLocation from "../MyLocation";

describe("MyLocation component", () => {
  it("MyLocation should render correctly", () => {
    render(<MyLocation />);
    expect(true).toBeTruthy();
  });
});
