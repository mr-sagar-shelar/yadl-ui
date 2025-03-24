import type { Meta, StoryObj } from "@storybook/react";
import Permissions from "../Permissions";

const meta: Meta<typeof Permissions> = { title: "GCP/Permissions", component: Permissions };

export default meta;
type Story = StoryObj<typeof Permissions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
