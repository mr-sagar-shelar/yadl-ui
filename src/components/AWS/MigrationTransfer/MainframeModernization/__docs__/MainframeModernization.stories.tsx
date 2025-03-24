import type { Meta, StoryObj } from "@storybook/react";
import MainframeModernization from "../MainframeModernization";

const meta: Meta<typeof MainframeModernization> = { title: "AWS/MigrationTransfer/MainframeModernization", component: MainframeModernization };

export default meta;
type Story = StoryObj<typeof MainframeModernization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
