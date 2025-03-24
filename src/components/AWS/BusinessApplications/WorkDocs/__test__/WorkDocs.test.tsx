import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkDocs from "../WorkDocs";

describe("WorkDocs component", () => {
  it("WorkDocs should render correctly", () => {
    render(<WorkDocs />);
    expect(true).toBeTruthy();
  });
});
