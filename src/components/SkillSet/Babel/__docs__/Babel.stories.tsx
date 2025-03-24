import type { Meta, StoryObj } from "@storybook/react";
import Babel from "../Babel";

const meta: Meta<typeof Babel> = { title: "SkillSet/Babel", component: Babel };

export default meta;
type Story = StoryObj<typeof Babel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
