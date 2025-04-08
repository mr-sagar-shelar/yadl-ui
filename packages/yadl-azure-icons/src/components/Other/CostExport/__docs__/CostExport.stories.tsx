import type { Meta, StoryObj } from "@storybook/react";
import CostExport from "../CostExport";

const meta: Meta<typeof CostExport> = { title: "Azure/Other/CostExport", component: CostExport };

export default meta;
type Story = StoryObj<typeof CostExport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
