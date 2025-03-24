import type { Meta, StoryObj } from "@storybook/react";
import WebStorm from "../WebStorm";

const meta: Meta<typeof WebStorm> = { title: "SkillSet/WebStorm", component: WebStorm };

export default meta;
type Story = StoryObj<typeof WebStorm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
