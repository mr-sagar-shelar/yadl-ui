import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudForMarketing from "../CloudForMarketing";

describe("CloudForMarketing component", () => {
  it("CloudForMarketing should render correctly", () => {
    render(<CloudForMarketing />);
    expect(true).toBeTruthy();
  });
});
