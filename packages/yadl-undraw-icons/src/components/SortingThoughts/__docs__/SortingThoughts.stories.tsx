import type { Meta, StoryObj } from "@storybook/react";
import SortingThoughts from "../SortingThoughts";

const meta: Meta<typeof SortingThoughts> = { title: "unDraw/SortingThoughts", component: SortingThoughts };

export default meta;
type Story = StoryObj<typeof SortingThoughts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
