import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tabs from "../Tabs";

describe("Tabs component", () => {
  it("Tabs should render correctly", () => {
    render(<Tabs />);
    expect(true).toBeTruthy();
  });
});
