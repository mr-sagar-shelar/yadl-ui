import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataCatalog from "../DataCatalog";

describe("DataCatalog component", () => {
  it("DataCatalog should render correctly", () => {
    render(<DataCatalog />);
    expect(true).toBeTruthy();
  });
});
