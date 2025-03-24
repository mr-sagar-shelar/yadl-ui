import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../DatePicker";

const meta: Meta<typeof DatePicker> = { title: "unDraw/DatePicker", component: DatePicker };

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
