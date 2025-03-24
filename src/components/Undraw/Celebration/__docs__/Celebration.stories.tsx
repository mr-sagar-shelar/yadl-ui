import type { Meta, StoryObj } from "@storybook/react";
import Celebration from "../Celebration";

const meta: Meta<typeof Celebration> = { title: "unDraw/Celebration", component: Celebration };

export default meta;
type Story = StoryObj<typeof Celebration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
