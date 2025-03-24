import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Amplify from "../Amplify";

describe("Amplify component", () => {
  it("Amplify should render correctly", () => {
    render(<Amplify />);
    expect(true).toBeTruthy();
  });
});
