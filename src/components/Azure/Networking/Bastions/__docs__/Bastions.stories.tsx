import type { Meta, StoryObj } from "@storybook/react";
import Bastions from "../Bastions";

const meta: Meta<typeof Bastions> = { title: "Azure/Networking/Bastions", component: Bastions };

export default meta;
type Story = StoryObj<typeof Bastions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
