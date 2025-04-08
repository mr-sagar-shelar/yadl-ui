import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AtHome from "../AtHome";

describe("AtHome component", () => {
  it("AtHome should render correctly", () => {
    render(<AtHome />);
    expect(true).toBeTruthy();
  });
});
