import type { Meta, StoryObj } from "@storybook/react";
import FarmGirl from "../FarmGirl";

const meta: Meta<typeof FarmGirl> = { title: "unDraw/FarmGirl", component: FarmGirl };

export default meta;
type Story = StoryObj<typeof FarmGirl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
