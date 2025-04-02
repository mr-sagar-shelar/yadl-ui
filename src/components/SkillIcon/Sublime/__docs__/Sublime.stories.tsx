import type { Meta, StoryObj } from "@storybook/react";
import Sublime from "../Sublime";

const meta: Meta<typeof Sublime> = { title: "SkillIcon/Sublime", component: Sublime };

export default meta;
type Story = StoryObj<typeof Sublime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
