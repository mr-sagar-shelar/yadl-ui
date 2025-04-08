import type { Meta, StoryObj } from "@storybook/react";
import Selenium from "../Selenium";

const meta: Meta<typeof Selenium> = { title: "SkillIcon/Selenium", component: Selenium };

export default meta;
type Story = StoryObj<typeof Selenium>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
