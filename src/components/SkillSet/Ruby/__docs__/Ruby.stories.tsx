import type { Meta, StoryObj } from "@storybook/react";
import Ruby from "../Ruby";

const meta: Meta<typeof Ruby> = { title: "SkillSet/Ruby", component: Ruby };

export default meta;
type Story = StoryObj<typeof Ruby>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
