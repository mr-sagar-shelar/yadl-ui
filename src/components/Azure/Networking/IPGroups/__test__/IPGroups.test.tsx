import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IPGroups from "../IPGroups";

describe("IPGroups component", () => {
  it("IPGroups should render correctly", () => {
    render(<IPGroups />);
    expect(true).toBeTruthy();
  });
});
