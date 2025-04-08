import type { Meta, StoryObj } from "@storybook/react";
import BugFixingBugFixing from "../BugFixingBugFixing";

const meta: Meta<typeof BugFixingBugFixing> = { title: "unDraw/BugFixingBugFixing", component: BugFixingBugFixing };

export default meta;
type Story = StoryObj<typeof BugFixingBugFixing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
