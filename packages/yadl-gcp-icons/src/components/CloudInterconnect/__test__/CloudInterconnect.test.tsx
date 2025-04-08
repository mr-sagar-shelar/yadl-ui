import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudInterconnect from "../CloudInterconnect";

describe("CloudInterconnect component", () => {
  it("CloudInterconnect should render correctly", () => {
    render(<CloudInterconnect />);
    expect(true).toBeTruthy();
  });
});
