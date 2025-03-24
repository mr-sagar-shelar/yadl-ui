import type { Meta, StoryObj } from "@storybook/react";
import Selection from "../Selection";

const meta: Meta<typeof Selection> = { title: "unDraw/Selection", component: Selection };

export default meta;
type Story = StoryObj<typeof Selection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
