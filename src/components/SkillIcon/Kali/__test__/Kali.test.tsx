import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kali from "../Kali";

describe("Kali component", () => {
  it("Kali should render correctly", () => {
    render(<Kali />);
    expect(true).toBeTruthy();
  });
});
