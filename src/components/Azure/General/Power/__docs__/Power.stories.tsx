import type { Meta, StoryObj } from "@storybook/react";
import Power from "../Power";

const meta: Meta<typeof Power> = { title: "Azure/General/Power", component: Power };

export default meta;
type Story = StoryObj<typeof Power>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
