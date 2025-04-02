import type { Meta, StoryObj } from "@storybook/react";
import Perl from "../Perl";

const meta: Meta<typeof Perl> = { title: "SkillIcon/Perl", component: Perl };

export default meta;
type Story = StoryObj<typeof Perl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
