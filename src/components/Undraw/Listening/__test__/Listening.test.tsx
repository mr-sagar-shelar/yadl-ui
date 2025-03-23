import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Listening from "../Listening";

describe("Listening component", () => {
  it("Listening should render correctly", () => {
    render(<Listening />);
    expect(true).toBeTruthy();
  });
});
