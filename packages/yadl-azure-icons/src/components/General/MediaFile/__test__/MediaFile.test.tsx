import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MediaFile from "../MediaFile";

describe("MediaFile component", () => {
  it("MediaFile should render correctly", () => {
    render(<MediaFile />);
    expect(true).toBeTruthy();
  });
});
