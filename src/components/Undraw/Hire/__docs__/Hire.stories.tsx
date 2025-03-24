import type { Meta, StoryObj } from "@storybook/react";
import Hire from "../Hire";

const meta: Meta<typeof Hire> = { title: "unDraw/Hire", component: Hire };

export default meta;
type Story = StoryObj<typeof Hire>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
