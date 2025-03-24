import type { Meta, StoryObj } from "@storybook/react";
import Cache from "../Cache";

const meta: Meta<typeof Cache> = { title: "Azure/General/Cache", component: Cache };

export default meta;
type Story = StoryObj<typeof Cache>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
