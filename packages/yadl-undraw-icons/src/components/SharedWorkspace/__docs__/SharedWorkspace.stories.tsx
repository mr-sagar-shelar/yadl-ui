import type { Meta, StoryObj } from "@storybook/react";
import SharedWorkspace from "../SharedWorkspace";

const meta: Meta<typeof SharedWorkspace> = { title: "unDraw/SharedWorkspace", component: SharedWorkspace };

export default meta;
type Story = StoryObj<typeof SharedWorkspace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
