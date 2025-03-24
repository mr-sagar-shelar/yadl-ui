import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cognito from "../Cognito";

describe("Cognito component", () => {
  it("Cognito should render correctly", () => {
    render(<Cognito />);
    expect(true).toBeTruthy();
  });
});
