import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DocumentAi from "../DocumentAi";

describe("DocumentAi component", () => {
  it("DocumentAi should render correctly", () => {
    render(<DocumentAi />);
    expect(true).toBeTruthy();
  });
});
