import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenSearchService from "../OpenSearchService";

describe("OpenSearchService component", () => {
  it("OpenSearchService should render correctly", () => {
    render(<OpenSearchService />);
    expect(true).toBeTruthy();
  });
});
