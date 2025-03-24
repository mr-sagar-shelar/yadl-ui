import type { Meta, StoryObj } from "@storybook/react";
import BitBucket from "../BitBucket";

const meta: Meta<typeof BitBucket> = { title: "SkillSet/BitBucket", component: BitBucket };

export default meta;
type Story = StoryObj<typeof BitBucket>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
