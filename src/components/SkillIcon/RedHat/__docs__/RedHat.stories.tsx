import type { Meta, StoryObj } from "@storybook/react";
import RedHat from "../RedHat";

const meta: Meta<typeof RedHat> = { title: "SkillIcon/RedHat", component: RedHat };

export default meta;
type Story = StoryObj<typeof RedHat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
