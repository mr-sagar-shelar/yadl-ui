import type { Meta, StoryObj } from "@storybook/react";
import Audition from "../Audition";

const meta: Meta<typeof Audition> = { title: "SkillSet/Audition", component: Audition };

export default meta;
type Story = StoryObj<typeof Audition>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
