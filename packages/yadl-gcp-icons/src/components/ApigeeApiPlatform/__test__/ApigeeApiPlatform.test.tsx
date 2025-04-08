import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApigeeApiPlatform from "../ApigeeApiPlatform";

describe("ApigeeApiPlatform component", () => {
  it("ApigeeApiPlatform should render correctly", () => {
    render(<ApigeeApiPlatform />);
    expect(true).toBeTruthy();
  });
});
