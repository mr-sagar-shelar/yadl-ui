import type { Meta, StoryObj } from "@storybook/react";
import GCP from "../GCP";

const meta: Meta<typeof GCP> = { title: "SkillIcon/GCP", component: GCP };

export default meta;
type Story = StoryObj<typeof GCP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
