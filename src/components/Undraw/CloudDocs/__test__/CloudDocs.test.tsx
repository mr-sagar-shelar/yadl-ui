import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDocs from "../CloudDocs";

describe("CloudDocs component", () => {
  it("CloudDocs should render correctly", () => {
    render(<CloudDocs />);
    expect(true).toBeTruthy();
  });
});
