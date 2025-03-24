import type { Meta, StoryObj } from "@storybook/react";
import DevOpsStarter from "../DevOpsStarter";

const meta: Meta<typeof DevOpsStarter> = { title: "Azure/Devops/DevOpsStarter", component: DevOpsStarter };

export default meta;
type Story = StoryObj<typeof DevOpsStarter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
