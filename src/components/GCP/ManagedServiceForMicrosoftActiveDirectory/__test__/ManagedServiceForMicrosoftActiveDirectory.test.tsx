import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedServiceForMicrosoftActiveDirectory from "../ManagedServiceForMicrosoftActiveDirectory";

describe("ManagedServiceForMicrosoftActiveDirectory component", () => {
  it("ManagedServiceForMicrosoftActiveDirectory should render correctly", () => {
    render(<ManagedServiceForMicrosoftActiveDirectory />);
    expect(true).toBeTruthy();
  });
});
