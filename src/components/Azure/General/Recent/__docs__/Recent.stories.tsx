import type { Meta, StoryObj } from "@storybook/react";
import Recent from "../Recent";

const meta: Meta<typeof Recent> = { title: "Azure/General/Recent", component: Recent };

export default meta;
type Story = StoryObj<typeof Recent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
