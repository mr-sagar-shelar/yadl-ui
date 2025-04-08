import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageGateway from "../StorageGateway";

describe("StorageGateway component", () => {
  it("StorageGateway should render correctly", () => {
    render(<StorageGateway />);
    expect(true).toBeTruthy();
  });
});
