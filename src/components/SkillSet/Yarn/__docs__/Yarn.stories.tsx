import type { Meta, StoryObj } from "@storybook/react";
import Yarn from "../Yarn";

const meta: Meta<typeof Yarn> = { title: "SkillSet/Yarn", component: Yarn };

export default meta;
type Story = StoryObj<typeof Yarn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
