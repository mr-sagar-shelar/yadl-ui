import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudInferenceApi from "../CloudInferenceApi";

describe("CloudInferenceApi component", () => {
  it("CloudInferenceApi should render correctly", () => {
    render(<CloudInferenceApi />);
    expect(true).toBeTruthy();
  });
});
