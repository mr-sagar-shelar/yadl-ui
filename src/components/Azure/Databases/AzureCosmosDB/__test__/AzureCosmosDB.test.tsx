import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureCosmosDB from "../AzureCosmosDB";

describe("AzureCosmosDB component", () => {
  it("AzureCosmosDB should render correctly", () => {
    render(<AzureCosmosDB />);
    expect(true).toBeTruthy();
  });
});
