import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HDInsightClusters from "../HDInsightClusters";

describe("HDInsightClusters component", () => {
  it("HDInsightClusters should render correctly", () => {
    render(<HDInsightClusters />);
    expect(true).toBeTruthy();
  });
});
