import type { Meta, StoryObj } from "@storybook/react";
import FeelingOfJoy from "../FeelingOfJoy";

const meta: Meta<typeof FeelingOfJoy> = { title: "unDraw/FeelingOfJoy", component: FeelingOfJoy };

export default meta;
type Story = StoryObj<typeof FeelingOfJoy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
