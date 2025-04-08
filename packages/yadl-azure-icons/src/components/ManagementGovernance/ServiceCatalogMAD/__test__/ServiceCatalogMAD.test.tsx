import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceCatalogMAD from "../ServiceCatalogMAD";

describe("ServiceCatalogMAD component", () => {
  it("ServiceCatalogMAD should render correctly", () => {
    render(<ServiceCatalogMAD />);
    expect(true).toBeTruthy();
  });
});
