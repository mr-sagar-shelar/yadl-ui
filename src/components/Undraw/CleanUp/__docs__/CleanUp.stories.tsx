import type { Meta, StoryObj } from "@storybook/react";
import CleanUp from "../CleanUp";

const meta: Meta<typeof CleanUp> = { title: "unDraw/CleanUp", component: CleanUp };

export default meta;
type Story = StoryObj<typeof CleanUp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
