import type { Meta, StoryObj } from "@storybook/react";
import CollabCollab from "../CollabCollab";

const meta: Meta<typeof CollabCollab> = { title: "unDraw/CollabCollab", component: CollabCollab };

export default meta;
type Story = StoryObj<typeof CollabCollab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
