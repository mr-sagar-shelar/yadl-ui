import type { Meta, StoryObj } from "@storybook/react";
import Pug from "../Pug";

const meta: Meta<typeof Pug> = { title: "SkillSet/Pug", component: Pug };

export default meta;
type Story = StoryObj<typeof Pug>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
