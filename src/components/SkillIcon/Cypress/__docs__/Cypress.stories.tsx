import type { Meta, StoryObj } from "@storybook/react";
import Cypress from "../Cypress";

const meta: Meta<typeof Cypress> = { title: "SkillIcon/Cypress", component: Cypress };

export default meta;
type Story = StoryObj<typeof Cypress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
