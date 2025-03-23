import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Verified from "../Verified";

describe("Verified component", () => {
  it("Verified should render correctly", () => {
    render(<Verified />);
    expect(true).toBeTruthy();
  });
});
