import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataCollectionRules from "../DataCollectionRules";

describe("DataCollectionRules component", () => {
  it("DataCollectionRules should render correctly", () => {
    render(<DataCollectionRules />);
    expect(true).toBeTruthy();
  });
});
