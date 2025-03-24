import type { Meta, StoryObj } from "@storybook/react";
import Flutter from "../Flutter";

const meta: Meta<typeof Flutter> = { title: "SkillSet/Flutter", component: Flutter };

export default meta;
type Story = StoryObj<typeof Flutter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
