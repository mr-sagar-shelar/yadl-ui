import type { Meta, StoryObj } from "@storybook/react";
import Barbecue from "../Barbecue";

const meta: Meta<typeof Barbecue> = { title: "unDraw/Barbecue", component: Barbecue };

export default meta;
type Story = StoryObj<typeof Barbecue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
