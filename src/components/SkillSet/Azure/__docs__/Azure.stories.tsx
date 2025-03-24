import type { Meta, StoryObj } from "@storybook/react";
import Azure from "../Azure";

const meta: Meta<typeof Azure> = { title: "SkillSet/Azure", component: Azure };

export default meta;
type Story = StoryObj<typeof Azure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
