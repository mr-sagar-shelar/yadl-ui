import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticContainerRegistry from "../ElasticContainerRegistry";

describe("ElasticContainerRegistry component", () => {
  it("ElasticContainerRegistry should render correctly", () => {
    render(<ElasticContainerRegistry />);
    expect(true).toBeTruthy();
  });
});
