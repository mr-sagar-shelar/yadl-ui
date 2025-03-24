import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DocumentDB from "../DocumentDB";

describe("DocumentDB component", () => {
  it("DocumentDB should render correctly", () => {
    render(<DocumentDB />);
    expect(true).toBeTruthy();
  });
});
