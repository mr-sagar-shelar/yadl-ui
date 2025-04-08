import type { Meta, StoryObj } from "@storybook/react";
import Notebook from "../Notebook";

const meta: Meta<typeof Notebook> = { title: "unDraw/Notebook", component: Notebook };

export default meta;
type Story = StoryObj<typeof Notebook>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
