import type { Meta, StoryObj } from "@storybook/react";
import Data from "../Data";

const meta: Meta<typeof Data> = { title: "unDraw/Data", component: Data };

export default meta;
type Story = StoryObj<typeof Data>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
