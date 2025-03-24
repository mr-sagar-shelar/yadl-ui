import type { Meta, StoryObj } from "@storybook/react";
import Yew from "../Yew";

const meta: Meta<typeof Yew> = { title: "SkillSet/Yew", component: Yew };

export default meta;
type Story = StoryObj<typeof Yew>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
