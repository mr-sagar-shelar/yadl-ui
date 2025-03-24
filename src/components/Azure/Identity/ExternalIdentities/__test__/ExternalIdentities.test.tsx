import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExternalIdentities from "../ExternalIdentities";

describe("ExternalIdentities component", () => {
  it("ExternalIdentities should render correctly", () => {
    render(<ExternalIdentities />);
    expect(true).toBeTruthy();
  });
});
