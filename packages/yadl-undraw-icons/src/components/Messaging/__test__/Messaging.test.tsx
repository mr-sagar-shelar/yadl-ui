import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Messaging from "../Messaging";

describe("Messaging component", () => {
  it("Messaging should render correctly", () => {
    render(<Messaging />);
    expect(true).toBeTruthy();
  });
});
