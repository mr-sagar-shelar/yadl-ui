import type { Meta, StoryObj } from "@storybook/react";
import Sentry from "../Sentry";

const meta: Meta<typeof Sentry> = { title: "SkillIcon/Sentry", component: Sentry };

export default meta;
type Story = StoryObj<typeof Sentry>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
