import type { Meta, StoryObj } from "@storybook/react";
import MyWorkspace from "../MyWorkspace";

const meta: Meta<typeof MyWorkspace> = { title: "unDraw/MyWorkspace", component: MyWorkspace };

export default meta;
type Story = StoryObj<typeof MyWorkspace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
