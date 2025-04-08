import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageSyncServices from "../StorageSyncServices";

describe("StorageSyncServices component", () => {
  it("StorageSyncServices should render correctly", () => {
    render(<StorageSyncServices />);
    expect(true).toBeTruthy();
  });
});
