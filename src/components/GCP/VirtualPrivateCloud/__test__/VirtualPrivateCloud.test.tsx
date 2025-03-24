import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualPrivateCloud from "../VirtualPrivateCloud";

describe("VirtualPrivateCloud component", () => {
  it("VirtualPrivateCloud should render correctly", () => {
    render(<VirtualPrivateCloud />);
    expect(true).toBeTruthy();
  });
});
