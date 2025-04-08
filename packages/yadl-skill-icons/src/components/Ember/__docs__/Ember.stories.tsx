import type { Meta, StoryObj } from "@storybook/react";
import Ember from "../Ember";

const meta: Meta<typeof Ember> = { title: "SkillIcon/Ember", component: Ember };

export default meta;
type Story = StoryObj<typeof Ember>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
