import type { Meta, StoryObj } from "@storybook/react";
import AiHub from "../AiHub";

const meta: Meta<typeof AiHub> = { title: "GCP/AiHub", component: AiHub };

export default meta;
type Story = StoryObj<typeof AiHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
