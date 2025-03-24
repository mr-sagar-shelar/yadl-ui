import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "../Calendar";

const meta: Meta<typeof Calendar> = { title: "unDraw/Calendar", component: Calendar };

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
