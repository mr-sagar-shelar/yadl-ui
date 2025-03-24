import type { Meta, StoryObj } from "@storybook/react";
import Rider from "../Rider";

const meta: Meta<typeof Rider> = { title: "SkillSet/Rider", component: Rider };

export default meta;
type Story = StoryObj<typeof Rider>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
