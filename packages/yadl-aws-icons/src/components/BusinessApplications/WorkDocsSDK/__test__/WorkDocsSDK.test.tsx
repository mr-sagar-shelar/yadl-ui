import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkDocsSDK from "../WorkDocsSDK";

describe("WorkDocsSDK component", () => {
  it("WorkDocsSDK should render correctly", () => {
    render(<WorkDocsSDK />);
    expect(true).toBeTruthy();
  });
});
