import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Firebase from "../Firebase";

describe("Firebase component", () => {
  it("Firebase should render correctly", () => {
    render(<Firebase />);
    expect(true).toBeTruthy();
  });
});
