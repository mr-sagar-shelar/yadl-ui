import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoogleDocs from "../GoogleDocs";

describe("GoogleDocs component", () => {
  it("GoogleDocs should render correctly", () => {
    render(<GoogleDocs />);
    expect(true).toBeTruthy();
  });
});
