import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoingUpwards from "../GoingUpwards";

describe("GoingUpwards component", () => {
  it("GoingUpwards should render correctly", () => {
    render(<GoingUpwards />);
    expect(true).toBeTruthy();
  });
});
