import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SimpleQueueService from "../SimpleQueueService";

describe("SimpleQueueService component", () => {
  it("SimpleQueueService should render correctly", () => {
    render(<SimpleQueueService />);
    expect(true).toBeTruthy();
  });
});
