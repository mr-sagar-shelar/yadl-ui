import type { Meta, StoryObj } from "@storybook/react";
import RestorePointsCollections from "../RestorePointsCollections";

const meta: Meta<typeof RestorePointsCollections> = { title: "Azure/Compute/RestorePointsCollections", component: RestorePointsCollections };

export default meta;
type Story = StoryObj<typeof RestorePointsCollections>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
