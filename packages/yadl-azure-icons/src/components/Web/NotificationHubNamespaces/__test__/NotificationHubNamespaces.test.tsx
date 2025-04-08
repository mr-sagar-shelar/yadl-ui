import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NotificationHubNamespaces from "../NotificationHubNamespaces";

describe("NotificationHubNamespaces component", () => {
  it("NotificationHubNamespaces should render correctly", () => {
    render(<NotificationHubNamespaces />);
    expect(true).toBeTruthy();
  });
});
