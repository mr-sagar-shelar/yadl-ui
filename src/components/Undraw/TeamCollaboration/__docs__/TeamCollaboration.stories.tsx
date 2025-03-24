import type { Meta, StoryObj } from "@storybook/react";
import TeamCollaboration from "../TeamCollaboration";

const meta: Meta<typeof TeamCollaboration> = { title: "unDraw/TeamCollaboration", component: TeamCollaboration };

export default meta;
type Story = StoryObj<typeof TeamCollaboration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
