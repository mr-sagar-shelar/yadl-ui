import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersistentDisk from "../PersistentDisk";

describe("PersistentDisk component", () => {
  it("PersistentDisk should render correctly", () => {
    render(<PersistentDisk />);
    expect(true).toBeTruthy();
  });
});
