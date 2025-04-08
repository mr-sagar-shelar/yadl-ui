import type { Meta, StoryObj } from "@storybook/react";
import Doctors from "../Doctors";

const meta: Meta<typeof Doctors> = { title: "unDraw/Doctors", component: Doctors };

export default meta;
type Story = StoryObj<typeof Doctors>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
