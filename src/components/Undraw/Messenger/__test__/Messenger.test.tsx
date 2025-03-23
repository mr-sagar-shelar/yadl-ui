import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Messenger from "../Messenger";

describe("Messenger component", () => {
  it("Messenger should render correctly", () => {
    render(<Messenger />);
    expect(true).toBeTruthy();
  });
});
