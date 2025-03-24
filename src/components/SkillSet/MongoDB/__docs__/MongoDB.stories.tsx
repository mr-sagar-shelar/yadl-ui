import type { Meta, StoryObj } from "@storybook/react";
import MongoDB from "../MongoDB";

const meta: Meta<typeof MongoDB> = { title: "SkillSet/MongoDB", component: MongoDB };

export default meta;
type Story = StoryObj<typeof MongoDB>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
