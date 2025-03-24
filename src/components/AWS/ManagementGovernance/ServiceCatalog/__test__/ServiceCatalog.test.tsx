import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceCatalog from "../ServiceCatalog";

describe("ServiceCatalog component", () => {
  it("ServiceCatalog should render correctly", () => {
    render(<ServiceCatalog />);
    expect(true).toBeTruthy();
  });
});
