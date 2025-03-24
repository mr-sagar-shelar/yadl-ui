import type { Meta, StoryObj } from "@storybook/react";
import Percentages from "../Percentages";

const meta: Meta<typeof Percentages> = { title: "unDraw/Percentages", component: Percentages };

export default meta;
type Story = StoryObj<typeof Percentages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
