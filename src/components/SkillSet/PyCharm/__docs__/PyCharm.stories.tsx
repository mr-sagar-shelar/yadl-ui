import type { Meta, StoryObj } from "@storybook/react";
import PyCharm from "../PyCharm";

const meta: Meta<typeof PyCharm> = { title: "SkillSet/PyCharm", component: PyCharm };

export default meta;
type Story = StoryObj<typeof PyCharm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
