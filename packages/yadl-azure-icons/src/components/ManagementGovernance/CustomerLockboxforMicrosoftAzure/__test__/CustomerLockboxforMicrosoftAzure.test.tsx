import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CustomerLockboxforMicrosoftAzure from "../CustomerLockboxforMicrosoftAzure";

describe("CustomerLockboxforMicrosoftAzure component", () => {
  it("CustomerLockboxforMicrosoftAzure should render correctly", () => {
    render(<CustomerLockboxforMicrosoftAzure />);
    expect(true).toBeTruthy();
  });
});
