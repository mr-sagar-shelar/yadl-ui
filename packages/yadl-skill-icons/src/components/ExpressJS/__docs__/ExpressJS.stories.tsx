import type { Meta, StoryObj } from "@storybook/react";
import ExpressJS from "../ExpressJS";

const meta: Meta<typeof ExpressJS> = { title: "SkillIcon/ExpressJS", component: ExpressJS };

export default meta;
type Story = StoryObj<typeof ExpressJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
