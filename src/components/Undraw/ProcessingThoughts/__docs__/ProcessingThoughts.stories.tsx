import type { Meta, StoryObj } from "@storybook/react";
import ProcessingThoughts from "../ProcessingThoughts";

const meta: Meta<typeof ProcessingThoughts> = { title: "unDraw/ProcessingThoughts", component: ProcessingThoughts };

export default meta;
type Story = StoryObj<typeof ProcessingThoughts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
