import type { Meta, StoryObj } from "@storybook/react";
import Activate from "../Activate";

const meta: Meta<typeof Activate> = { title: "AWS/CustomerEnablement/Activate", component: Activate };

export default meta;
type Story = StoryObj<typeof Activate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
