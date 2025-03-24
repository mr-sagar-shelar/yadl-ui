import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticDisasterRecovery from "../ElasticDisasterRecovery";

describe("ElasticDisasterRecovery component", () => {
  it("ElasticDisasterRecovery should render correctly", () => {
    render(<ElasticDisasterRecovery />);
    expect(true).toBeTruthy();
  });
});
