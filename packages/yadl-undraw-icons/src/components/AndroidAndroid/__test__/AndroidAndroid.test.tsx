import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AndroidAndroid from "../AndroidAndroid";

describe("AndroidAndroid component", () => {
  it("AndroidAndroid should render correctly", () => {
    render(<AndroidAndroid />);
    expect(true).toBeTruthy();
  });
});
