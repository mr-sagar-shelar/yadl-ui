import type { Meta, StoryObj } from "@storybook/react";
import Firebase from "../Firebase";

const meta: Meta<typeof Firebase> = { title: "SkillIcon/Firebase", component: Firebase };

export default meta;
type Story = StoryObj<typeof Firebase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
