import type { Meta, StoryObj } from "@storybook/react";
import Appwrite from "../Appwrite";

const meta: Meta<typeof Appwrite> = { title: "SkillIcon/Appwrite", component: Appwrite };

export default meta;
type Story = StoryObj<typeof Appwrite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
