import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateServiceConnect from "../PrivateServiceConnect";

describe("PrivateServiceConnect component", () => {
  it("PrivateServiceConnect should render correctly", () => {
    render(<PrivateServiceConnect />);
    expect(true).toBeTruthy();
  });
});
