import type { Meta, StoryObj } from "@storybook/react";
import RollupJS from "../RollupJS";

const meta: Meta<typeof RollupJS> = { title: "SkillSet/RollupJS", component: RollupJS };

export default meta;
type Story = StoryObj<typeof RollupJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
