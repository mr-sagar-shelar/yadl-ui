import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SimpleNotificationService from "../SimpleNotificationService";

describe("SimpleNotificationService component", () => {
  it("SimpleNotificationService should render correctly", () => {
    render(<SimpleNotificationService />);
    expect(true).toBeTruthy();
  });
});
