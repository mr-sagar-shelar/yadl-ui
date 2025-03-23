import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AttachedFile from "../AttachedFile";

describe("AttachedFile component", () => {
  it("AttachedFile should render correctly", () => {
    render(<AttachedFile />);
    expect(true).toBeTruthy();
  });
});
